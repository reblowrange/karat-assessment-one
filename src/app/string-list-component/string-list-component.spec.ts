import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringListComponent } from './string-list-component';

describe('StringListComponent', () => {
  let component: StringListComponent;
  let fixture: ComponentFixture<StringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StringListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
