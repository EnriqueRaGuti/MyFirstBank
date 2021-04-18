import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  cuentas
  user

  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore) {
      this.misCuentas()
      this.guardian()
     }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  guardian() {
    this.FireAuth.authState.subscribe(user => {
      if(!user) {
        this.router.navigate(['/login'])
      }else{
        this.user = user.uid
        console.log(user.uid);
      }
    });
  }

  misCuentas() {
    this.FireAuth.authState.subscribe(user => {
    this.FireStore.collection(`Cuentas/${user.uid}/cuentas`).valueChanges().subscribe( cuentas => {
        this.cuentas = cuentas
    })
    })
  }

  verDetalle(numero) {
    this.router.navigate(['/detallecuenta/'+ numero])
  }

  cerrarSesion() {
    this.FireAuth.signOut();
}

  insTercero() {
    this.router.navigate(['/inscribirtercero'])
  }

  trasnferencia() {
    this.router.navigate(['/seleccionarcuenta'])
  }

  crearCuenta() {
    this.router.navigate(['/crearcuenta'])
  }

}
