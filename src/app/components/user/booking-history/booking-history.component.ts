import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth-service.service";
import {User} from "../../../models/user";
import {Booking} from "../../../models/booking.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  Bookings:Booking[];
  constructor(public authsrv:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.getBookingsHistory();
  }
  getBookingsHistory(){
    this.userService.getbookingHistoryList().subscribe(data=>{
      this.Bookings=data;
    });
  }

  cancelBooking(Booking: Booking) {
    this.userService.cancelBooking(Booking.code).subscribe(() => {
      console.log("Booking deleted");
  },
      error=> {

          alert(error.error);
      }
      );
}
}
