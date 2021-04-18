import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { ServicioService } from 'src/app/Integraciones/servicio.service';

@Component({
  selector: 'app-transmicuentaform',
  templateUrl: './transmicuentaform.page.html',
  styleUrls: ['./transmicuentaform.page.scss'],
})
export class TransmicuentaformPage implements OnInit {

  numeroRuta
  alias
  numero
  monto
  cuentas
  destino
  cantidad
  c = 0
  fech = new Date();
  sumar = 0
  descontar = 0

  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
              private FireStore: AngularFirestore, public route: ActivatedRoute, public alert: AlertController,
              public date: ServicioService) {
                this.numeroRuta = this.route.snapshot.paramMap.get('numero')
                this.cuentaOrigen()
                this.misCuentas()

  }

  ngOnInit() {
  }

  cuentaOrigen() {
    this.FireAuth.authState.subscribe( user => {
      this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.numeroRuta}`).valueChanges().subscribe((cuenta:any) => {
          this.alias = cuenta.alias
          this.monto = cuenta.monto
          this.numero = cuenta.numero
      })
    })
  }
  misCuentas() {
    this.FireAuth.authState.subscribe(user => {
    this.FireStore.collection(`Cuentas/${user.uid}/cuentas`).valueChanges().subscribe( cuentas => {
        this.cuentas = cuentas
    })
    })
  }

  transferir() {
    if(this.destino == this.numero) {
      this.showAlert("Cuidado!", "No se puede transferir a la misma cuenta!")
    }else {
      if(this.monto < this.cantidad) {
        this.showAlert("Cuidado!", "Fondos insuficientes!")
      }else {
        this.descontar = this.monto - this.cantidad
        // sumar = this.
        this.FireAuth.authState.subscribe( user => {
          this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.numeroRuta}`).update({
           monto: this.descontar
          })
          // this.movimeintosDescontar
          this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.destino}`).valueChanges().subscribe((datosDestino:any)=>{
            console.log(datosDestino.monto);
            if(this.c == 0) {
              this.sumar = datosDestino.monto + this.cantidad
              this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.destino}`).update({
                  monto: this.sumar
              })
              // this.movimientosSumar()
            }this.c++
            
          })
        })
        this.movimientosSumar()
        this.movimeintosDescontar()
      }
    }
    this.showAlert("Bien!", "Se realizo la operacion!")
    
  }
  movimientosSumar() {
    let signo="+"
    let hora, fecha, rutaHora
    hora = this.date.getHora()
    fecha = this.date.getFecha();
    rutaHora = this.numeroRuta+hora
    console.log(hora, fecha, rutaHora);
    this.FireAuth.authState.subscribe( user => {
      this.FireStore.doc(`Cuentas/${user.uid}/movimientos/${this.destino}/mov/${rutaHora}`).set({
        fecha: fecha,
        hora:hora,
        monto: this.cantidad,
        documento: this.destino,
        signo: signo
      })
    })
  }

  movimeintosDescontar() {
    let signo="-"
    let hora, fecha, rutaHora
    hora = this.date.getHora()
    fecha = this.date.getFecha();
    rutaHora = this.numeroRuta+hora
    console.log(hora, fecha, rutaHora);
    this.FireAuth.authState.subscribe( user => {
      this.FireStore.doc(`Cuentas/${user.uid}/movimientos/${this.numeroRuta}/mov/${rutaHora}`).set({
        fecha: fecha,
        hora:hora,
        monto: this.cantidad,
        documento: this.destino,
        signo: signo
      })
    })
  }


  volver() {
    this.router.navigate(['/destino/'+this.numeroRuta])
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }

  limpiarCampos() {
    this.cantidad =""
    this.destino =""
  }

}