import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card-component/user-card-component';
import { User } from '../models/common.model';
import { RestService } from '../service/rest.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../libs/material-module';

@Component({
  selector: 'app-user-container',
  imports: [CommonModule, MaterialModule, UserCardComponent],
  templateUrl: './user-container.html',
  styleUrl: './user-container.scss',
})
export class UserContainer implements OnInit {
  public user = { name: 'Swapnil', email: 'swapnil@ltm.com' } as User;
  public randomGeneratedId = NaN;
  public data$: Observable<User[]>;

  constructor(public restService: RestService) {
    this.data$ = this.restService.getUsers();
  }

  ngOnInit(): void {
  }

  public onGeneratedId(randomId: number): void {
    this.randomGeneratedId = randomId;
  }
}
