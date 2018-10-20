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
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { RestoViewComponent } from './components/resto-view/resto-view.component';
import { TableReservationComponent } from './components/table-reservation/table-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    RestoListComponent,
    MainComponent,
    DatePickerComponent,
    RestoViewComponent,
    TableReservationComponent
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
