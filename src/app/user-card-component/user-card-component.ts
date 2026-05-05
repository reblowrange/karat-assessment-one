import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/common.model';
import { MaterialModule } from '../libs/material-module';

@Component({
  selector: 'app-user-card-component',
  imports: [MaterialModule],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.scss',
})
export class UserCardComponent {
  @Input() user = {} as User;

  @Output() onGeneratedId = new EventEmitter<number>();

  public generateRandomId(): void {
    this.onGeneratedId.emit(this.generateRandom3to5DigitNumber());
  }

  private generateRandom3to5DigitNumber(): number {
    const min = 100;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
