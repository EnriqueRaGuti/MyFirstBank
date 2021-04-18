import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-seleccionarcuenta',
  templateUrl: './seleccionarcuenta.page.html',
  styleUrls: ['./seleccionarcuenta.page.scss'],
})
export class SeleccionarcuentaPage implements OnInit {
  
  cuentas

  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore) {
      this.misCuentas()
     }

  ngOnInit() {
  }

  misCuentas() {
    this.FireAuth.authState.subscribe(user => {
    this.FireStore.collection(`Cuentas/${user.uid}/cuentas`).valueChanges().subscribe( cuentas => {
        this.cuentas = cuentas
    })
    })
  }

  transferir(numero) {
    this.router.navigate(['/destino/'+ numero])
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

}
