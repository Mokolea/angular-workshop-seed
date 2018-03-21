import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {Error404Component} from './error404/error404.component';
import {APP_ROUTES} from './app.routes';

@NgModule({
  declarations: [
    // Components
    // Directives
    // Pipes
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  exports: [
    // Modules
    // Components
    // Directives
  ],
  imports: [
    // Modules
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    // RouterModule.forRoot(APP_ROUTES, {useHash: true, enableTracing: true}) /* support old hash-fragment */
    RouterModule.forRoot(APP_ROUTES, {enableTracing: true})
  ],
  providers: [
    // Services
    // { provide: FlightService, useClass: FlightService }
    // FlightService // <-- short form
    // or, see providers here: flight-search/flight-search.component.ts
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
