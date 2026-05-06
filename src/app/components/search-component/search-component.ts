import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialModule } from '@app/libs/material-module';
import { RestService } from '@app/service/rest.service';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-component',
  imports: [CommonModule, MaterialModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss',
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl('');
  results$!: Observable<any[]>;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),            // wait for typing to pause
      distinctUntilChanged(),       // ignore same value
      switchMap(term =>
        this.restService.search(term)
      )
    );
  }
}