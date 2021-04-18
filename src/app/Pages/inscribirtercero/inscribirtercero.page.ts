import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inscribirtercero',
  templateUrl: './inscribirtercero.page.html',
  styleUrls: ['./inscribirtercero.page.scss'],
})
export class InscribirterceroPage implements OnInit {

  alias
  banco
  tipo
  numero 
  identificacion
  monto = 0

  existe
  estadoexiste
  cont = 1

  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore, public route: ActivatedRoute, public alert: AlertController) {  }

  ngOnInit() {
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

  agregar() {
    let datoscuenta = {};
    datoscuenta['alias'] = this.alias;
    datoscuenta['banco'] = this.banco;
    datoscuenta['tipo'] = this.tipo
    datoscuenta['numero'] = this.numero
    datoscuenta['identificacion'] = this.identificacion
    datoscuenta['monto'] = this.monto
    
    this.FireAuth.authState.subscribe( user => {
      
        this.FireStore.doc(`Cuentas/${user.uid}/terceros/${this.numero}`).valueChanges().subscribe((data:any) => {
          if(this.cont == 1){ 
          if(data) {
            console.log("esta cuenta ya existe");
            this.showAlert("Cuidado!", "Esta cuenta ya existe!")
            this.numero = ""
          }else {
            console.log("esta cuenta no existe");
            this.FireStore.doc(`Cuentas/${user.uid}/terceros/${this.numero}`).set(datoscuenta).then(resp => { })
            this.showAlert("Bien!", "Se agrego correctamente!")
            this.limpairCampos()
          }
        }this.cont++
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
    this.banco = ""
    this.tipo = ""
    this.numero = ""
    this.identificacion = ""
  }


}
