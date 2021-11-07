import { Component, OnInit } from '@angular/core';
import {Booking} from "../../../models/booking.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../../services/booking.service";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  currentUser=new User();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private userService:UserService ) { }

  ngOnInit(): void {
    this.userService.getUserByID(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentUser = <User>prod; });
  }

  updateUser(){
    this.userService.updateUser(this.currentUser.id,this.currentUser).subscribe(() => {
        this.router.navigate(['Users']);
      },(error) => { alert("Error during modification !"); }
    );
  }
}
