import { Injectable } from '@angular/core';
//import {ContactForm} from '../models/ContatcForm';
//import { Observable } from 'rxjs/_esm5/Observable';
import { Observable } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})

export class SendEmailService {
  type:any;
  constructor( private http: HttpClient) { }
  getResponseEmail(){
  
  //getResponseEmail(_body: ContactForm){
  //getResponseEmail(_body: ContactForm): Observable<any>{
    // this.http.post('/send.php',_body).subscribe(data =>{
    //   console.log(data);
    //   this.type = JSON.stringify(data);
    // });
    //return this.http.post('/send.php',_body);
  }

}