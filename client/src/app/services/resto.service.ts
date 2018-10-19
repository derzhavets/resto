import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient) { }

  getAllRestos(): Observable<any> {
    return this.http.get('http://localhost:3000/resto/restos')
  }

  getResto(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/resto/restos/${id}`)
  }
}
