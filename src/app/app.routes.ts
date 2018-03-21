import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Error404Component} from './error404/error404.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  /*{
    path: 'flight-booking',
    loadChildren: 'app/flight-booking/flight-booking.module#FlightBookingModule'
  },*/
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'error404'
  }
];
