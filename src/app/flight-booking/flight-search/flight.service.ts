import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Flight} from '../../entities/flight';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FlightService {

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('id', id);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight>(url, {params, headers});
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from || '')
      .set('to', to || '');

    return this.http.get<Flight[]>(url, {headers, params});
  }

  save(flight: Flight): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.post<Flight>(url, flight, {headers});
  }

}
