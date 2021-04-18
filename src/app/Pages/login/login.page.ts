import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { AlertController, LoadingController } from '@ionic/angular'
import { AngularFirestore } from '@angular/fire/firestore';
import { ServicioService } from 'src/app/Integraciones/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario
  contrasena

  constructor( public FireAuth: AngularFireAuth, public router: Router, public alert: AlertController,
    private afs: AngularFirestore, public loadingController: LoadingController, public servicios: ServicioService) { 

      this.guardian()
    }

  ngOnInit() {
  }

  async login() {
  	const { usuario, contrasena } = this
  	try {
      const res = await this.FireAuth.signInWithEmailAndPassword(usuario + '@gmail.com', contrasena)
      this.router.navigate(['/inicio'])

  	}catch(err) {
      this.showAlert("Error!", "Datos no validos")
  		  if(err.code === "auth/user-not-found"){
            this.showAlert("Error!", "Datos no validos")
  		  }
    }
    this.limpiarCampos()
  }

  guardian() {
    this.FireAuth.authState.subscribe(user => {
      if(user) {
        this.router.navigate(['/inicio'])
      }
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

  limpiarCampos() {
    this.usuario = ""
    this.contrasena = ""
  }

}
