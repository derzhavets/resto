import { DateService } from './../../services/date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  date: Date

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.dateService.date.subscribe(date => this.date = date)
  }

  changeDate() {
    this.dateService.changeDate(this.date)
  }

}
