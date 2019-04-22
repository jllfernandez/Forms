import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../models/ContactModel';

//services en angular
//import {SendEmailService} from '../services/send-email.service';
//import {MiservicioService} from '../miservicio.service';
import {Servicio} from '../servicios/servicio1/Servicio';
//material desing de angular
import {MatSnackBar} from '@angular/material';
// Esta linea fue agregada automaticamente pueden borrarlo
import { NgForm } from '@angular/forms/src/directives/ng_form';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  contacto = new ContactModel();
  constructor(private miServicio: Servicio) { }
  //constructor(private sendServices: SendEmailService, public snackBar: MatSnackBar) { }

  ngOnInit() { 
  }

  onSubmit(f: NgForm){
    this.getSentServices(this.contacto, f);
}
//metodo de services
getSentServices(body:ContactModel, f: NgForm){
    
  /*
    this.sendServices.getResponseEmail(body).subscribe(
        data => {
            if(data){
                this.snackBar.open("Gracias por el mensaje", "Correcto", {
                    duration: 2000,
                  });
                  f.reset();
            }
            else{
                this.snackBar.open(":(", "Error", {
                    duration: 2000,
                  });
                  
            }
            
        },
        err => { this.snackBar.open("Algo fallo :/, correo: cesar@unprogramador.com", "ups", {
            duration: 5000,
          }); }
      );*/
      
      this.miServicio.execute(body);
  
}

}
