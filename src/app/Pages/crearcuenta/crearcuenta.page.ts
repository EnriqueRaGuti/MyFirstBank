import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  alias
  tipo
  numero
  identificacion
  monto = 0
  estado ="Activa"
  titular

  existe
  estadoexiste
  cont = 1


  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore, public route: ActivatedRoute, public alert: AlertController) {  }

  ngOnInit() {
  }

  agregar() {
    let datoscuenta = {};
    datoscuenta['alias'] = this.alias;
    datoscuenta['tipo'] = this.tipo
    datoscuenta['numero'] = this.numero
    datoscuenta['identificacion'] = this.identificacion
    datoscuenta['monto'] = this.monto
    datoscuenta['estado'] = this.estado
    
    this.FireAuth.authState.subscribe( user => {
      this.FireStore.doc(`Usuarios/${user.uid}`).valueChanges().subscribe((usuario:any) => {
      datoscuenta['titular'] = usuario.usuario
        this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.numero}`).valueChanges().subscribe((data:any) => {
          if(this.cont == 1){ 
          if(data) {
            this.showAlert("Cuidado!", "Esta cuenta ya existe!")
            this.numero = ""
          }else {
            this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.numero}`).set(datoscuenta).then(resp => { })
            this.showAlert("Bien!", "Se agrego correctamente!")
            this.limpairCampos()
          }
        }this.cont++
        })
      })
    })
      
             
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }

  limpairCampos() {
    this.alias = ""
    this.tipo = ""
    this.numero = ""
    this.identificacion = ""
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

}
