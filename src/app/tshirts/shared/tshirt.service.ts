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
  createTshirt(tshirt: Tshirt): Observable<Tshirt> {
    return this.http.post<Tshirt>(environment.baseUrl + 'tshirts', tshirt);
  }
  deleteTshirt(id: number): void {
    this.http.delete(environment.baseUrl + 'tshirts/' + id)
      .subscribe();
  }
  updateTshirt(tshirt: Tshirt): Observable<Tshirt> {
    return this.http.put<Tshirt>(environment.baseUrl + 'tshirts/' + tshirt.id, tshirt);
  }
  constructor(private http: HttpClient) { }
}
