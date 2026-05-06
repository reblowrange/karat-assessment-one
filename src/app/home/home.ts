import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '@app/libs/material-module';
import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, MaterialModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(public authService: AuthService) {}
  public loginSwitch(event: MatSlideToggleChange): void {
    this.authService.setLoggedIn(event.checked);
  }
}
