import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MaterialModule } from '@app/libs/material-module';

@Component({
  selector: 'app-form-container',
  imports: [MaterialModule],
  templateUrl: './form-container.html',
  styleUrl: './form-container.scss',
})
export class FormContainer {
  public aliasForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.aliasForm = this.fb.group({
      aliases: this.fb.array([]),
    });
  }

  // Getter for easy access to FormArray
  get aliases(): FormArray {
    return this.aliasForm.get('aliases') as FormArray;
  }

  public addAlias(): void {
    this.aliases.push(new FormControl(''));
  }

  
  removeAlias(index: number): void {
    this.aliases.removeAt(index);
  }

}
