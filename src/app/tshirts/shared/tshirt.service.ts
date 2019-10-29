import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Tshirt} from './model/tshirt';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TshirtService {
  getTshirts(): Observable<Tshirt[]> {
    return this.http.get<Tshirt[]>(environment.baseUrl + 'tshirts');
  }
  getTshirtById(id: number): Observable<Tshirt> {
    return this.http.get<Tshirt>(environment.baseUrl + 'tshirts/' + id);
  }
  createTshirt(tshirt: Tshirt): void {
    this.http.post(environment.baseUrl + 'tshirts', tshirt);
  }
  constructor(private http: HttpClient) { }
}
