import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {FlightService} from './flight-search/flight.service';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightCardComponent} from './flight-card/flight-card.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import {RouterModule, Routes} from '@angular/router';

const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightEditComponent,
    FlightCardComponent,
    PassengerSearchComponent
  ],
  providers:[
    { provide: FlightService, useClass: FlightService }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
