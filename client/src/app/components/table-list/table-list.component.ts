import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, OnChanges {

  @Input() date: Date
  @Input() resto: any

  @Input() selectedTable: any
  @Output() selectedTableChange = new EventEmitter()

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.resto && this.resto.tables) {
      this.updateTables()
    }
  }

  selectTable(table: any) {
    this.selectedTable = table
    this.selectedTableChange.emit(table)
  }

  updateTables() {
    const tables = this.resto.tables
    for (let i = 0; i < tables.length; i++) {
      if (this.isOccupiedforSelectedDate(tables[i].reservations)) {
        tables[i].occupied = true
      } else {
        tables[i].occupied = false
      }
    }
  }

  isOccupiedforSelectedDate(reservations: any) {
    for (let i = 0; i < reservations.length; i++) {
      if (moment(reservations[i].date).isSame(this.date)) {
        return true
      }
    }
    return false
  }
}
