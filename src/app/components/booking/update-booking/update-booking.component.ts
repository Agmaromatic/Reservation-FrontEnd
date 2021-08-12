import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../../services/booking.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Booking} from "../../../models/booking.model";

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  currentBooking=new Booking();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private bookingService:BookingService ) { }

  ngOnInit(): void {
    this.bookingService.bookingsByID(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentBooking = <Booking>prod; });
  }

  updateBooking(){
    this.bookingService.updateBooking(this.currentBooking.id,this.currentBooking).subscribe(() => {
        this.router.navigate(['Bookings']);
      },(error) => { alert("Error during modification !"); }
    );
  }

}
