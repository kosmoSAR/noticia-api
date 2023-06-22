import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametro:any):Observable<any>{
    const URL = "https://newsapi.org/v2/top-headlines?country="+parametro.pais+"&category="+parametro.categoria+"&apiKey=9ef65fec22e842d181794dfc088dc8eb";
    return this.http.get(URL);
  }
}
