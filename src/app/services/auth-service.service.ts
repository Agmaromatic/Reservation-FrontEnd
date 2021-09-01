import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = environment.API_URL;

  token:string;
  public loggedUser:string;
  public isloggedIn: boolean ;
  public roles:string[];
  private helper = new JwtHelperService();


  constructor(private router: Router,
              private http : HttpClient) { }


  login(user : User)
  {
    return this.http.post(this.apiURL+'/auth/login', user , {observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    console.log(this.isloggedIn);
    this.decodeJWT();
  }

  decodeJWT()
  {   if (this.token == undefined)
    return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.isloggedIn = true;
    console.log(this.roles);
    console.log(this.isloggedIn);
    this.loggedUser = decodedToken.sub;
    console.log(this.loggedUser);
  }



  loadToken() {
    this.token = <string>localStorage.getItem('jwt');
    this.decodeJWT();
  }

  getToken():string {
    return this.token;
  }

  logout() {
    this.loggedUser = "";
    this.roles = [];
    this.token= "";
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }



  isAdmin():Boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('ROLE_ADMIN') >=0;
  }



  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(login :string){

  }

}
