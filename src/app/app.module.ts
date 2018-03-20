import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightService} from './flight-search/flight.service';

@NgModule({
  declarations: [
    // Components
    // Directives
    // Pipes
    AppComponent,
    HomeComponent,
    FlightSearchComponent,
    FlightEditComponent
  ],
  exports: [
    // Modules
    // Components
    // Directives
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
    HttpClientModule
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
