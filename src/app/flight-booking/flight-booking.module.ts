import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {FlightService} from './flight-search/flight.service';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightCardComponent} from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightEditComponent,
    FlightCardComponent
  ],
  providers:[
    { provide: FlightService, useClass: FlightService }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
