import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.page.html',
  styleUrls: ['./destino.page.scss'],
})
export class DestinoPage implements OnInit {

  numeroRuta 
  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore, public route: ActivatedRoute) {

     }

  ngOnInit() {
  }

  misCuentas() {
    this.numeroRuta = this.route.snapshot.paramMap.get('numero')
    this.router.navigate(['/transmicuentaform/'+ this.numeroRuta])
  }
  aTerceros() {
    this.numeroRuta = this.route.snapshot.paramMap.get('numero')
    this.router.navigate(['/transterceroform/'+ this.numeroRuta])
  }

  scanner() {
    this.router.navigate(['/escaner'])
  }

  volver() {
    this.router.navigate(['/seleccionarcuenta'])
  }

}
