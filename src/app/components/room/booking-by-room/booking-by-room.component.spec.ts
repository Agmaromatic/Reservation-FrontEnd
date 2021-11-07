import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingByRoomComponent } from './booking-by-room.component';

describe('BookingByRoomComponent', () => {
  let component: BookingByRoomComponent;
  let fixture: ComponentFixture<BookingByRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingByRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingByRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
