import { Injectable } from '@angular/core';


//'../models/ContatcForm';
/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class MiservicioService {

  constructor() { }

  execute(){
    //getResponseEmail(_body: ContactForm): Observable<any>{
      // this.http.post('/send.php',_body).subscribe(data =>{
      //   console.log(data);
      //   this.type = JSON.stringify(data);
      // });
      //return this.http.post('/send.php',_body);
      console.log('ejecuto');
    }
}
