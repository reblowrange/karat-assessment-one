import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card-component/user-card-component';
import { User } from '../models/common.model';
import { RestService } from '../service/rest.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../libs/material-module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TruncatePipe } from '../pipes/truncate-pipe';

@Component({
  selector: 'app-user-container',
  imports: [CommonModule, MaterialModule, UserCardComponent, TruncatePipe],
  templateUrl: './user-container.html',
  styleUrl: './user-container.scss',
})
export class UserContainer implements OnInit {
  public user = { name: 'Swapnil', email: 'swapnil@ltm.com' } as User;
  public randomGeneratedId = NaN;
  public data$: Observable<User[]>;
  public emailForm: FormGroup;

  constructor(public restService: RestService) {
    this.data$ = this.restService.getUsers();
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  public onGeneratedId(randomId: number): void {
    this.randomGeneratedId = randomId;
  }
}
