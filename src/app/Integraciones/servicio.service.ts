import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  fech = new Date();
    mes
    dia

  constructor() { }

  getHora() {
    let h = this.fech.getHours() + ":"+ this.fech.getMinutes() 
    return h;
  }

  getFecha() {
    let ffull;
      this.mes = (this.fech.getMonth()+1)
      this.dia = this.fech.getDate()
      if(this.mes<10 && this.dia<10) {
        ffull = this.fech.getFullYear() +"-0"+ (this.fech.getMonth()+1)  +"-0"+  this.fech.getDate()
        return ffull;
      }else {
          if(this.mes < 10) {
            ffull = this.fech.getFullYear() +"-0"+ (this.fech.getMonth()+1)  +"-"+  this.fech.getDate()
            return ffull;
          }else {
              if(this.dia<10) {
                ffull = this.fech.getFullYear() +"-"+ (this.fech.getMonth()+1)  +"-0"+  this.fech.getDate()
                return ffull;
              }else {
                if(this.mes>=10 && this.dia>=10) {
                  ffull = this.fech.getFullYear() +"-"+ (this.fech.getMonth()+1)  +"-"+  this.fech.getDate()
                  return ffull;
                }
              }
          }
      }
  }
}
