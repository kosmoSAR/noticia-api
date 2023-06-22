import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>()
  categoriaSeleccionada = 'business';
  paisSeleccionada = 'br';

  categoria:any[]=[
    {value: "general", nombre:"General"},
    {value: "business", nombre:"Negocios"},
    {value: "entertainment", nombre:"Entretenimiento"},
    {value: "health", nombre:"Salud"},
    {value: "science", nombre:"Ciencia"},
    {value: "sports", nombre:"Deportes"},
    {value: "technology", nombre:"Tecnología"},
  ]

  paises:any[]=[
    {value: "ar", nombre:"Argentina"},
    {value: "br", nombre:"Brasil"},
    {value: "us", nombre:"Estados Unidos"},
    {value: "mx", nombre:"México"},
    {value: "co", nombre:"Colombia"},
  ]

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionada
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
