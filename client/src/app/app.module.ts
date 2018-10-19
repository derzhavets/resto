import { MaterialModule } from './material.module';
import { RestoService } from './services/resto.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestoListComponent } from './components/resto-list/resto-list.component';
import { RestoComponent } from './components/resto/resto.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { TableListComponent } from './components/table-list/table-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    RestoListComponent,
    RestoComponent,
    TableComponent,
    TableListComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [RestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
