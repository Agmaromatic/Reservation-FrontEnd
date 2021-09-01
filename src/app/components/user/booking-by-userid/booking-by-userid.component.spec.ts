import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingByUseridComponent } from './booking-by-userid.component';

describe('BookingByUseridComponent', () => {
  let component: BookingByUseridComponent;
  let fixture: ComponentFixture<BookingByUseridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingByUseridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingByUseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
