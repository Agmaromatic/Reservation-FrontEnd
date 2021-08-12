import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import {AuthService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User =new User();
  authsrv:AuthService;
  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    if(this.authsrv.isloggedIn){
      this.router.navigate(['/home']);
      return;
    }
  }

  onSubmit(){
    this.saveUser();
    this.goToHome();
  }

  saveUser(){
    this.userService.registerUser(this.user).subscribe(data =>{
        console.log(data);
      },
      error=> console.log(error));
  }


  goToHome(){
    this.router.navigate(['/login']);
  }


}
