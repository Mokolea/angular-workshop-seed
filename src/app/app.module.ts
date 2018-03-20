import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    // Components
    // Directives
    // Pipes
    AppComponent,
    HomeComponent,
    FlightSearchComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
