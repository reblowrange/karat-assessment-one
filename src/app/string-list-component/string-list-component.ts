import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../libs/material-module';

@Component({
  selector: 'app-string-list-component',
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './string-list-component.html',
  standalone: true,
  styleUrl: './string-list-component.scss',
})
export class StringListComponent {
  items: string[] = ['Test String 1', 'Test String 2'];
  inputValue = '';

  addItem(): void {
    const value = this.inputValue.trim();

    if (value && !this.items.includes(value)) {
      this.items.push(value);
    }

    this.inputValue = '';
  }
}
