import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-editarcuenta',
  templateUrl: './editarcuenta.page.html',
  styleUrls: ['./editarcuenta.page.scss'],
})
export class EditarcuentaPage implements OnInit {
  numeroRuta

  alias
  tipo
  titular
  estado
  monto
  numero

  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore, public route: ActivatedRoute, public alert: AlertController) { 

    this.numeroRuta = this.route.snapshot.paramMap.get('numero')
    this.consultarCuenta()
}

  ngOnInit() {
  }

  consultarCuenta() {
    this.FireAuth.authState.subscribe( user => {
      this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.numeroRuta}`).valueChanges().subscribe((cuenta:any) => {
          this.alias = cuenta.alias
          this.tipo = cuenta.tipo 
          this.titular = cuenta.titular 
          this.estado = cuenta.estado
          this.monto = cuenta.monto
          this.numero = cuenta.numero
      })
    })
  }

  editar() {
    this.FireAuth.authState.subscribe( user => {
    let actualizados = {};
      actualizados['alias'] = this.alias;
    this.FireStore.doc(`Cuentas/${user.uid}/cuentas/${this.numeroRuta}`).update(actualizados);
    this.router.navigate([`/detallecuenta/`+ this.numeroRuta])
    this.showAlert("Bien!", "Se modifico el servicio corectamente!")
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

  volver() {
    this.router.navigate([`/detallecuenta/`+ this.numeroRuta])
  }

}
