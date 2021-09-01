import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {BookForm} from "../../../models/book-form.model";
import {RoomService} from "../../../services/room.service";
import {Room} from "../../../models/room.model";



@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
form:BookForm=new BookForm();
rooms:Room[];
dateSt:string;
timeSt:string;
dateEd:string;
timeEd:string
  date:Date = new Date();

errormessage:string;

errorList:string


  constructor(private userService:UserService, private roomService:RoomService,
              private router:Router) { }
  ngOnInit(): void {
    this.getRooms();
  }
  onSubmit(){
    this.bookRoom();
  }

  bookRoom(){
    this.form.dateStart=this.dateSt+"T"+this.timeSt;
    this.form.dateEnd=this.dateEd+"T"+this.timeEd;

    this.userService.BookRoom(this.form).subscribe(data =>{
        console.log(data);
      },
      error=> {console.log(error);
              console.log(error.status);
              this.errormessage=error.error;
              if(error.status!=200){
                alert("Not saved due to error ");}
              else
              {
                alert("Saved successfully ")
                this.goToBookingList();

            }}

    );
  }



  goToBookingList(){
    this.router.navigate(['/bookings']);
  }

   getRooms(){
    this.roomService.getAvailableRoomsList().subscribe(data=>{
      this.rooms=data;
    });
  }

}
