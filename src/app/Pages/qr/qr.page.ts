import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  qrData= '123456'
  elementType: 'url' | 'canvas' |'img' = 'canvas';

  constructor() { }

  ngOnInit() {
  }

}
