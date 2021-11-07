import { Component, OnInit } from '@angular/core';
import {Booking} from "../../../models/booking.model";
import {BookingService} from "../../../services/booking.service";
import {RoomService} from "../../../services/room.service";
import {AuthService} from "../../../services/auth-service.service";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
latestroom:string;
bookingsNumber:number;
roomsNumber:number;
usersNumber:number;
  diffDays:number;
  diffHrs:number;
  diffMins:number;


  mostBookedRoom:string;
public nextCode:string;
today: Date = new Date();

  public nextBooking: Booking = new Booking();
  constructor(private bookingService:BookingService,private roomService:RoomService,private authsrv:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.getRooms();
    this.getUsers();
    this.getBookings();

  }

  getRooms(){
    this.roomService.getLatestBookedRoom().subscribe(data =>{
      this.latestroom=data.name;
    })

    this.roomService.getRoomsList().subscribe(data=>{
      this.roomsNumber=data.length;
    })

    this.roomService.getMostBookedRoom().subscribe(data=>{
      this.mostBookedRoom=data.name;
    })
  }

  getUsers(){
    this.userService.getUsersList().subscribe(data=>{
      this.usersNumber=data.length;
    })
  }

  getBookings(){
    this.bookingService.getBookingsList().subscribe(data=>{
      this.bookingsNumber=data.length;
    })

    this.bookingService.bookingsByNext().subscribe(data=>{
      this.nextCode=data;
      console.log(data);
        this.bookingService.bookingsByCode(this.nextCode).subscribe(data=>{
            // @ts-ignore
          this.nextBooking = data;
            console.log(data);
            console.log(this.nextBooking);

            const date =new Date(this.nextBooking.startDate)
          const diffMs = date.getTime()- this.today.getTime(); // milliseconds between now & Christmas
           this.diffDays = Math.floor(diffMs / 86400000); // days
          this.diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
          this.diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

        })
    }

    )


}




}
