import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public search(searchVal: string | null): Observable<string[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search?q=${searchVal}`);
  }
}
