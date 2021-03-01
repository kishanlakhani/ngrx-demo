import { User } from './../models/user.interface';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.API_BASE_URL;
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl + 'users');
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + 'users/' + id);
  }

  addUser(data: User): Observable<any> {
    return this.http.post(this.apiUrl + 'users', data);
  }
  updateUser(data: User): Observable<any> {
    return this.http.patch(this.apiUrl + 'users/' + data.id, data);
  }

}
