import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightBookingModule} from './flight-booking/flight-booking.module';

@NgModule({
  declarations: [
    // Components
    // Directives
    // Pipes
    AppComponent
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
    FlightBookingModule // <-- important
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
