import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../../services/booking.service";
import {Booking} from "../../../models/booking.model";
import {Room} from "../../../models/room.model";
import {RoomService} from "../../../services/room.service";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  currentRoom=new Room();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private roomService:RoomService ) { }

  ngOnInit(): void {
    this.roomService.getRoomByID(this.activatedRoute.snapshot.params.id).
    subscribe( room =>{ this.currentRoom = <Room>room; });
  }

  updateRoom(){
    this.roomService.updateRoom(this.currentRoom.id,this.currentRoom).subscribe(() => {
        this.router.navigate(['rooms']);
      },(error) => { alert("Error during modification !"); }
    );
  }

}
