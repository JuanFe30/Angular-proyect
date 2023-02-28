import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  filterName = "";
  model = [
    {
      "name": "Model 3"
    },
    {
      "name": "Model S"
    },
    {
      "name": "Model X"
    },
    {
      "name": "Model Y"
    },
    {
      "name": "Accesorios"
    },
    {
      "name": "Paneles Solares"
    }
  ]
}
