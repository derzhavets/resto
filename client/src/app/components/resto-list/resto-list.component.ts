import { RestoService } from './../../services/resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css']
})
export class RestoListComponent implements OnInit {

  restos: Array<any>;
  
  constructor(private restoService: RestoService) { }

  ngOnInit() {
    this.restoService.getAllRestos().subscribe(data => {
      console.log('Received list of restos:\n', data);
      this.restos = data;
    })
  }

}
