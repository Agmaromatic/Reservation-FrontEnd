import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
user:User =new User();
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveUser();
    this.goToUserList();
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
    },
      error=> console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/']);
  }



}
