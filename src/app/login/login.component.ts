import { Component } from '@angular/core';

export interface Ilogin{
  usuario?: string,
  contrasena?: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  habilitarBoton = false;

  login: Ilogin;

  constructor(){
    this.login ={
      usuario: "",
      contrasena: ""
    }
  }

  Onsubmit(datosFormulario: any){
    console.log(datosFormulario);
  }
  
  registroExitoso(event:Event){
    alert(`Te registraste Exitosamente`)
  }
}
