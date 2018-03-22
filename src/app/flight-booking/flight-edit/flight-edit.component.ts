import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../entities/flight';
import {FlightService} from '../flight-search/flight.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {validCity} from './validators/valid-city.validator';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styles: []
})
export class FlightEditComponent implements OnInit {

  @Input() selectedFlight: Flight = {} as Flight;
  //selectedFlight: Flight = {id: 5, from: 'Wien', to: 'Zürich', date: '01-01-2018'};
  message: string;

  id$;
  selectedFlight$: Observable<Flight>;

  editForm: FormGroup; // test ReactiveFormsModule

  constructor(private flightService: FlightService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    /*const idControl = new FormControl(1);
    this.editForm = new FormGroup({id: idControl});*/
    this.editForm = this.fb.group({
      id:   [1],
      from: [],
      to:   [],
      date: []
    });
    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    console.log(this.editForm.touched);
    console.log(this.editForm.pristine);

    /*this.route.params.subscribe(
      params => console.log(params)
    )*/
    this.id$ = this.route.params.pipe(
      map(params => params.id));

    /* pluck() */

    this.selectedFlight$ = this.route.params.pipe(
      switchMap(params => this.flightService.findById(params.id)));

    /*this.selectedFlight$ = this.id$.pipe(
      switchMap(id => this.flightService.findById())
    )*/
    /*this.selectedFlight$ = this.route.params.pipe(switchMap(params => {
      this.flightService.findById(params.id)
    }));*/

    /* todo remove following ... use selectedFlight$, not selectedFlight */
    this.route.params.pipe(
      switchMap(params => this.flightService.findById(params.id)))
      .subscribe(
        flight => { this.selectedFlight = flight; this.message = ''; },
        err => { this.message = 'Fehler beim Laden'; }
    );
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
