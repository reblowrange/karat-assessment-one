import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card-component/user-card-component";
import { User } from '../models/common.model';

@Component({
  selector: 'app-user-container',
  imports: [UserCardComponent],
  templateUrl: './user-container.html',
  styleUrl: './user-container.scss',
})
export class UserContainer {
  public user = {name: 'Swapnil', email: 'swapnil@ltm.com'} as User;
}
