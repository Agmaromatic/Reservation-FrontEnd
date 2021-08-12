import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth-service.service";

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  isAuth:boolean=false;
  LoggedUser:string;

  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
this.isAuth=this.authServ.isloggedIn;
this.LoggedUser=this.authServ.loggedUser;
  }

  onlogout():void{
    this.authServ.logout();
  }

}
