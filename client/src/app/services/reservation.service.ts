import { Reservation } from './../models/reservation';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getTable(id: String): Observable<any> {
    return this.http.get(`/api/tables/${id}`)
  }

  createReservation(id: String, reservation: Reservation): Observable<any> {
    return this.http.post(`/api/tables/${id}/reserve`, reservation)
  }

  cancelReservation(id: String): Observable<any> {
    return this.http.get(`/api/reservations/${id}/cancel`)
  }

  getReservationsToDate(date: Date): Observable<any> {
    return this.http.get(`/api/reservations/date/${date}`)
  }
}