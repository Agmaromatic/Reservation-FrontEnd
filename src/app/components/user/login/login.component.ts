import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  err:number = 0;

  constructor(private authService : AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin()
  {
    this.authService.login(this.user).subscribe((data)=> {
      // @ts-ignore
      let jwToken = data.body["access_token"];
      if (jwToken != null) {
        this.authService.saveToken(jwToken);
      }
      this.router.navigate(['/']);
    },(err)=>{   this.err = 1;
    });

  }


}
