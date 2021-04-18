import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-detallecuenta',
  templateUrl: './detallecuenta.page.html',
  styleUrls: ['./detallecuenta.page.scss'],
})
export class DetallecuentaPage implements OnInit {
  numeroRuta
  alias
  tipo
  titular
  estado
  monto
  numero
  mov

  constructor(public router: Router, private menu: MenuController, public FireAuth: AngularFireAuth, 
    private FireStore: AngularFirestore, public route: ActivatedRoute) { 

    this.numeroRuta = this.route.snapshot.paramMap.get('numero')
    this.consultarCuenta()
    this.consultarMov()
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

  consultarMov() {
    this.FireAuth.authState.subscribe( user => {
      this.FireStore.collection(`Cuentas/${user.uid}/movimientos/${this.numeroRuta}/mov`).valueChanges().subscribe((mov:any) => {
         this.mov = mov
         console.log(this.mov);
         
      })
    })
  }

  editarCuenta() {
    this.router.navigate(['/editarcuenta/'+ this.numeroRuta])
  }

  mostrarQR() {
    this.router.navigate(['/qr'])
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

}