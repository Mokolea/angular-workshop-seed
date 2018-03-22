import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {FlightService} from './flight-search/flight.service';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightCardComponent} from './flight-card/flight-card.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import {FlightBookingRoutesModule} from './flight-booking.routes';
import {FlightBookingComponent} from './flight-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FlightBookingRoutesModule,
    ReactiveFormsModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightEditComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightBookingComponent
  ],
  providers:[
    { provide: FlightService, useClass: FlightService }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
