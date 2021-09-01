import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./services/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookingApp';
  isLoggedin: boolean;
  user:string

  // @ts-ignore
  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.user=this.authService.loggedUser;
    if (this.authService.getToken() == null ||
      this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
  }
}
