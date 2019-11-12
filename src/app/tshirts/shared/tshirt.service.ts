import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Tshirt} from './model/tshirt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from './model/user';
import { AuthenticationService } from './authentication.service';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    Authorization: 'my-auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TshirtService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }
  getTshirts(): Observable<Tshirt[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Tshirt[]>(environment.baseUrl + 'tshirts', httpOptions);
  }
  getTshirtById(id: number): Observable<Tshirt> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Tshirt>(environment.baseUrl + 'tshirts/' + id, httpOptions);
  }
  createTshirt(tshirt: Tshirt): Observable<Tshirt> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Tshirt>(environment.baseUrl + 'tshirts', tshirt, httpOptions);
  }
  deleteTshirt(id: number): void {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    this.http.delete(environment.baseUrl + 'tshirts/' + id, httpOptions)
      .subscribe();
  }
  updateTshirt(tshirt: Tshirt): Observable<Tshirt> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Tshirt>(environment.baseUrl + 'tshirts/' + tshirt.id, tshirt, httpOptions);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl + 'users');
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.baseUrl + 'users/' + id);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl + 'users', user);
  }
  deleteUser(id: number): void {
    this.http.delete(environment.baseUrl + 'users/' + id)
      .subscribe();
  }
  updateUsers(user: User): Observable<User> {
    return this.http.put<User>(environment.baseUrl + 'users/' + user.id, user);
  }
}
