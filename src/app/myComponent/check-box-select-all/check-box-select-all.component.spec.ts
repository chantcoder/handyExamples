import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxSelectAllComponent } from './check-box-select-all.component';

describe('CheckBoxSelectAllComponent', () => {
  let component: CheckBoxSelectAllComponent;
  let fixture: ComponentFixture<CheckBoxSelectAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxSelectAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
