import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {BookForm} from "../models/book-form.model";
import {Booking} from "../models/booking.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private LocalUrl="http://localhost:8080/api/user";
private HostedUrl="http://reservationsystemspringboot-env.eba-wmy77kmm.eu-west-3.elasticbeanstalk.com/api/user/all";

  constructor(private httpclient :HttpClient) { }

  getUsersList():Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.LocalUrl}/all`)
      .pipe(
        map(response => response),
        tap(users => console.log("users array", users))    // users array [Object, Object, Object]
      );
  }




  createUser(user: User): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/save`, user);
  }
  getUserByID(user: User): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/{id}`);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.LocalUrl}/delete/${id}`);
  }

  updateUser(id: number,user:User): Observable<Object>{
    return this.httpclient.put(`${this.LocalUrl}/update/${id}`,user);
  }

  registerUser(user: User): Observable<Object>{
    return this.httpclient.post("http://localhost:8080/api/auth/register", user);
  }

  BookRoom(form: BookForm): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/book/`, form);
  }

  // @ts-ignore

  addRole(username:string): Observable<Object>{

    return this.httpclient.post(`http://localhost:8080/api/roleaddToUser`,username);
  }

  cancelBooking(code:string): Observable<any>{
    return this.httpclient.delete(`${this.LocalUrl}/booking/cancel/${code}`,{responseType: 'text'});
  }

  getbookingHistoryList():Observable<Booking[]> {
    return this.httpclient.get<Booking[]>(`${this.LocalUrl}/bookings`);
  }



}
