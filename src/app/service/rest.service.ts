import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
