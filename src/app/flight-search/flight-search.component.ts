import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Flight} from '../entities/flight';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {
  from: string;
  to: string;
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private http: HttpClient) {
  }

  ngOnInit() { }

  search(): void {
    // Implementation follows
    const url = 'http://www.angular.at/api/flight';
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    this.http
      .get<Flight[]>(url, {headers, params})
      .subscribe(
        (flights: Flight[]) => {
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

