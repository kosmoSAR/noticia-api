import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticia-api';
  listadoNoticias:any[] = [];
  loading:boolean = false;

  constructor(private _api:NoticiasService){}

  buscarNoticias(parametro:any){
    this.loading = true;
    this.listadoNoticias=[];
    setTimeout(()=>{
      this._api.getNoticias(parametro).subscribe(resultado => 
        {
          this.loading = false;
          this.listadoNoticias = resultado.articles
        });
    },1000)   
  }
}
