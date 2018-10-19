import { Reservation } from './../models/reservation';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  createReservation(id: String, reservation: Reservation): Observable<any> {
    return this.http.post(`http://localhost:3000/resto/tables/${id}/reserve`, reservation)
  }

  cancelReservation(id: String): Observable<any> {
    return this.http.get(`http://localhost:3000/resto/reservations/${id}/cancel`)
  }

}