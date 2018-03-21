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
  {
    path: '**',
    /*redirectTo: 'home'*/
    component: Error404Component
  }
];
