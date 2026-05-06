import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  public login(): Observable<boolean> {
    return of(true);
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public setLoggedIn(val: boolean): void {
    this.loggedIn = val;
  }
}
