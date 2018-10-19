import { RestoService } from './../../services/resto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  date: Date
  resto: any = {}
  selectedTable: any

  constructor(private route: ActivatedRoute, private restoService: RestoService) { }
 
  ngOnInit() {
    this.date = new Date()
    this.date.setUTCHours(0,0,0,0)

    this.route.params.subscribe(params => {
      this.restoService.getResto(params['id']).subscribe(data => {
        console.log('Received resto:\n', data);
        this.resto = data
      })
    })   
  }
  
}

