import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private dateSource = new BehaviorSubject(this.getDefaultDate())
  date = this.dateSource.asObservable()

  constructor() { }

  changeDate(date: Date) {
    this.dateSource.next(date)
  }

  getDefaultDate() {
    let date = new Date()
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
