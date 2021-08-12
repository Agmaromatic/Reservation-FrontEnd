import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import {AuthService} from "../../../services/auth-service.service";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Users: User[];

  constructor(private userService:UserService,public authsrv:AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(){
    this.userService.getUsersList().subscribe(data=>{
      this.Users=data;
    });
  }



}
