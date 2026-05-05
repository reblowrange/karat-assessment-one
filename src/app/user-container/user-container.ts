import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card-component/user-card-component';
import { User } from '../models/common.model';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-user-container',
  imports: [UserCardComponent],
  templateUrl: './user-container.html',
  styleUrl: './user-container.scss',
})
export class UserContainer implements OnInit {
  public user = { name: 'Swapnil', email: 'swapnil@ltm.com' } as User;
  public randomGeneratedId = NaN;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getUsers().subscribe((res) => {
      console.log(res);
    });
  }

  public onGeneratedId(randomId: number): void {
    this.randomGeneratedId = randomId;
  }
}
