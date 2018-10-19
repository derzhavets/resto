import { Reservation } from './../../models/reservation';
import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit, OnChanges {

  reservation: Reservation = new Reservation()

  @Input() date: Date

  @Input() selectedTable: any
  @Output() selectedTableChange = new EventEmitter()

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.updateReservationModel()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateReservationModel()
  }

  backToList() {
    this.selectedTable = undefined
    this.selectedTableChange.emit(undefined)
  }

  updateReservationModel() {
    this.reservation = new Reservation()
    let reservations = this.selectedTable.reservations
    for (let i = 0; i < reservations.length; i++) {
      if (moment(reservations[i].date).isSame(this.date)) {
        this.reservation = reservations[i]
      }
    }
  }

  createReservation() {
    let r = new Reservation()
    r.name = this.reservation.name
    r.guests = this.reservation.guests
    r.date = this.date

    this.reservationService.createReservation(this.selectedTable._id, r).subscribe(data => {
      console.log('Saved reservation', data);
      this.selectedTable.reservations.push(data)
      this.selectedTableChange.emit(this.selectedTable)
      this.updateReservationModel()
    })
  }

  cancelReservation() {
    this.reservationService.cancelReservation(this.reservation._id).subscribe(data => {
      console.log('Deleted reservation: ', data);
    })

    let index = this.selectedTable.reservations.indexOf(this.reservation)
    this.selectedTable.reservations.splice(index, 1)
    this.selectedTableChange.emit(this.selectedTable)
    this.updateReservationModel()
  }
}
