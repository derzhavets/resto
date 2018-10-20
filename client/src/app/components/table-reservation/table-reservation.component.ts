import { ActivatedRoute } from '@angular/router';
import { DateService } from './../../services/date.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';

import * as moment from 'moment';
import { ReservationService } from '../../services/reservation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-reservation',
  templateUrl: './table-reservation.component.html',
  styleUrls: ['./table-reservation.component.css']
})
export class TableReservationComponent implements OnInit {

  reservation: Reservation = new Reservation()
  selectedTable: any

  date: Date

  constructor(private reservationService: ReservationService, private dateService: DateService,
    private route: ActivatedRoute, private localtion: Location) { }

  ngOnInit() {
    this.dateService.date.subscribe(date => {
      this.date = date
      this.updateReservationModel()
    })

    this.route.params.subscribe(params => {
      this.reservationService.getTable(params.id).subscribe(table => {
        console.log('Received table', table);
        this.selectedTable = table
        this.updateReservationModel()
      })
    })
  }


  updateReservationModel() {
    if (this.selectedTable) {
      this.reservation = new Reservation()
      let reservations = this.selectedTable.reservations
      for (let i = 0; i < reservations.length; i++) {
        if (moment(reservations[i].date).isSame(this.date)) {
          this.reservation = reservations[i]
        }
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
      this.updateReservationModel()
    })
  }

  cancelReservation() {
    this.reservationService.cancelReservation(this.reservation._id).subscribe(data => {
      console.log('Deleted reservation: ', data);
    })

    let index = this.selectedTable.reservations.indexOf(this.reservation)
    this.selectedTable.reservations.splice(index, 1)
    this.updateReservationModel()
  }

  goBack() {
    this.localtion.back()
  }
}
