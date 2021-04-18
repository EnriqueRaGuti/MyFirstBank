import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner, public afstore: AngularFirestore, 
    public afAuth: AngularFireAuth, public router: Router, public toastController: ToastController) { }

  ngOnInit() {

    this.scanCode()
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text
    
    })
  }

}
