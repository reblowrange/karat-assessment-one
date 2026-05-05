import { Component, Input } from '@angular/core';
import { User } from '../models/common.model';

@Component({
  selector: 'app-user-card-component',
  imports: [],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.scss',
})
export class UserCardComponent {
  @Input() user = {} as User;
}
