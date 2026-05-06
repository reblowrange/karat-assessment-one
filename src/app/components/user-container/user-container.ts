import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserCardComponent } from '../user-card-component/user-card-component';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MaterialModule } from '@app/libs/material-module';
import { User } from '@app/models/common.model';
import { TruncatePipe } from '@app/pipes/truncate-pipe';
import { RestService } from '@app/service/rest.service';
import { AuthService } from '@app/service/auth.service';
import { CustomCard } from '../custom-card/custom-card';

@Component({
  selector: 'app-user-container',
  imports: [CommonModule, MaterialModule, UserCardComponent, TruncatePipe, CustomCard],
  templateUrl: './user-container.html',
  styleUrl: './user-container.scss',
})
export class UserContainer implements OnInit {
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  public user = { name: 'Swapnil', email: 'swapnil@ltm.com' } as User;
  public randomGeneratedId = NaN;
  public data$: Observable<User[]>;
  public emailForm: FormGroup;

  constructor(
    public restService: RestService,
    private authService: AuthService,
  ) {
    this.data$ = this.restService.getUsers();

    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.authService.login().subscribe((res) => {
      if (res) console.log('Login Success');
    });
  }

  public onGeneratedId(randomId: number): void {
    this.randomGeneratedId = randomId;
  }

  public focusEmail(): void {
    this.emailInput.nativeElement.focus();
  }
}
