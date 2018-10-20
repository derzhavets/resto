import { ReservationService } from './../../services/reservation.service';
import { DateService } from './../../services/date.service';
import { RestoService } from './../../services/resto.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css']
})
export class RestoListComponent implements OnInit {

  restos: Array<any>
  date: Date

  constructor(private restoService: RestoService, private reservationService: ReservationService,
    private dateService: DateService) { }

  ngOnInit() {
    this.dateService.date.subscribe(date => {
      this.date = date
      if (this.restos) {
        this.updateRestos()
      }
    })

    this.restoService.getAllRestos().subscribe(restos => {
      console.log('Received list of restos:\n', restos);
      this.restos = restos;
      this.updateRestos()
    })
    
  }
  
  updateRestos() {
    this.reservationService.getReservationsToDate(this.date).subscribe(reservations => {
      this.restos.forEach(r => r.freeTables = r.tables.length) 
      reservations.forEach(res => {
        this.restos.forEach(resto => {
          if (resto._id == res.table.resto._id) {
            resto.freeTables--
          }
        })
      })

    })
    
  }

}
