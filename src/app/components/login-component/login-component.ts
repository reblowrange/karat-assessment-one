import { Component } from '@angular/core';
import { MaterialModule } from '@app/libs/material-module';
import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-login-component',
  imports: [MaterialModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  constructor(public authService: AuthService) {}
  public login(): void {
    this.authService.setLoggedIn(true);
  }
}
