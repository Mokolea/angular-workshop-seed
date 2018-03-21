import {RouterModule, Routes} from '@angular/router';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import {NgModule} from '@angular/core';

export const FLIGHT_BOOKING_ROUTES: Routes = [
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
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class FlightBookingRoutesModule { }
