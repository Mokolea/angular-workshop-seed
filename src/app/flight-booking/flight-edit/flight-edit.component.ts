import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../entities/flight';
import {FlightService} from '../flight-search/flight.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styles: []
})
export class FlightEditComponent implements OnInit {

  @Input() selectedFlight: Flight;
  //selectedFlight: Flight = {id: 5, from: 'Wien', to: 'Zürich', date: '01-01-2018'};
  message: string;

  constructor(private flightService: FlightService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => console.log(params)
    )
  }

  // save(): void {
  //   const url = 'http://www.angular.at/api/flight';
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');
  //
  //   this.http
  //     .post<Flight>(url, this.selectedFlight, { headers })
  //     .subscribe(
  //       (flight: Flight) => {
  //                   this.selectedFlight = flight;
  //                   this.message = 'Erfolgreich gespeichert!';
  //       },
  //       errResponse => {
  //         console.error('Fehler beim Speichern', errResponse);
  //         this.message = 'Fehler beim Speichern!';
  //       }
  //     );
  // }

  save(): void {
    this.flightService
      .save(this.selectedFlight)
      .subscribe(
        (flight: Flight) => {
                    this.selectedFlight = flight;
                    this.message = 'Erfolgreich gespeichert!';
        },
        errResponse => {
          console.error('Fehler beim Speichern', errResponse);
          this.message = 'Fehler beim Speichern!';
        });
  }

}
