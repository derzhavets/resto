import { ActivatedRoute } from '@angular/router';
import { DateService } from './../../services/date.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';

import * as moment from 'moment';
import { RestoService } from '../../services/resto.service';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-resto-view',
  templateUrl: './resto-view.component.html',
  styleUrls: ['./resto-view.component.css']
})
export class RestoViewComponent implements OnInit {

  date: Date
  resto: any = {}

  constructor(private dateService: DateService, private restoService: RestoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.dateService.date.subscribe(date => {
      this.date = date
      if (this.resto && this.resto.tables) {
        this.updateTables()
      }
    })

    this.route.params.subscribe(params => {
      this.restoService.getResto(params['id']).subscribe(data => {
        console.log('Received resto:\n', data)
        this.resto = data
        this.updateTables()
      })
    })
  }

  updateTables() {
    this.resto.tables = this.resto.tables.map(table => {
      table.occupied = this.isOccupiedforSelectedDate(table.reservations)
      return table
    })
  }

  isOccupiedforSelectedDate(reservations: Array<Reservation>) {
    return reservations
      .filter(res => moment(res.date).isSame(this.date))
      .length != 0
  }

}
