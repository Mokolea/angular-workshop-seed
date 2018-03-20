import {Component, OnInit} from '@angular/core';
import {Flight} from '../../entities/flight';
import {FlightService} from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {
  from: string;
  to: string;
  flights: Flight[] = [];
  selectedFlight: Flight;

   basket: object = {   // <-- new property
            "3": true,
            "5": true
        };

  constructor(private flightService: FlightService) {
  }

  ngOnInit() { }

  // search(): void {
  //   // Implementation follows
  //   const url = 'http://www.angular.at/api/flight';
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');
  //   const params = new HttpParams()
  //     .set('from', this.from)
  //     .set('to', this.to);
  //
  //   this.http
  //     .get<Flight[]>(url, {headers, params})
  //     .subscribe(
  //       (flights: Flight[]) => {
  //         this.flights = flights;
  //       },
  //       (errResp) => {
  //         console.error('Error loading flights', errResp);
  //       });
  // }

  search(): void {
    this.flightService
        .find(this.from, this.to)
        .subscribe(
            (flights) => {
                this.flights = flights;
            },
            (errResp) => {
                console.error('Error loading flights', errResp);
            });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}

