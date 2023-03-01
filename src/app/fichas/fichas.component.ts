import { Component } from '@angular/core';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent {

  infoAuto = "";

  fichas = [
    {
      "nombre": "Model 3",
      "velocidad": "Acelera de 0 a 100 km/h en 3.3 segundos. La velocidad máxima es de 260 km/h",
      "modelo": "2023",
      "Colores": "Azul, Rojo, Blanco"
    },
    {
      "nombre": "Model S",
      "velocidad": "Acelera de 0 a 100 km/h en 3.9 segundos. La velocidad máxima es de 240 km/h",
      "modelo": "2023",
      "Colores": "Azul, Rojo, Blanco"
    },
    {
      "nombre": "Model Y",
      "velocidad": "Acelera de 0 a 100 km/h en 3.2 segundos. La velocidad máxima es de 300 km/h",
      "modelo": "2023",
      "Colores": "Azul, Rojo, Blanco"
    }
  ]


  constructor(){
   
  }
}
