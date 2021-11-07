import { Component, OnInit } from '@angular/core';
import {Room} from "../../../models/room.model";
import {RoomService} from "../../../services/room.service";
import {DepartmentService} from "../../../services/department.service";
import {Router} from "@angular/router";
import {Department} from "../../../models/department.model";
import {RoomForm} from "../../../models/room-form.model";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room:Room =new Room();
  departments:Department[];
  form:RoomForm=new RoomForm();

  constructor(private roomService:RoomService,private departmentService:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.getDps();
  }

  onSubmit(){
    this.saveRoom();
    this.goToRoomList();

  }

  saveRoom(){
    // @ts-ignore
    this.roomService.createRoom(this.form).subscribe(data =>{
        console.log(data);
      },
      error=> console.log(error));
  }

  getDps(){
    this.departmentService.getdepartmentsList().subscribe(data=>{
      this.departments=data;
      console.log(data);
    });
  }

  private goToRoomList() {
    this.router.navigate(['/rooms']);
  }
}
