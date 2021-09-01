import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../models/room.model";
import { environment } from '../../environments/environment';
import {Booking} from "../models/booking.model";
import {User} from "../models/user";
import {RoomForm} from "../models/room-form.model";


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private LocalUrl=environment.API_URL;

  constructor(private httpclient :HttpClient) { }

  getRoomsList():Observable<Room[]> {
    return this.httpclient.get<Room[]>(`${this.LocalUrl}/room/all`);
  }

  getBookingListByRoom(id:number):Observable<Booking[]> {
    return this.httpclient.get<Booking[]>(`${this.LocalUrl}/room/${id}/bookings`);
  }
//Available rooms by date S and date E
//   getAvailableRoomsList(s:string,e:string):Observable<Room[]> {
//     return this.httpclient.get<Room[]>(`${this.LocalUrl}/room/available?start=${s}&end=${e}`);
//   }

  getAvailableRoomsList():Observable<Room[]> {
    return this.httpclient.get<Room[]>(`${this.LocalUrl}/room/available`);
  }

  createRoom(room: Room): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/room/save`, room);
  }
  getRoomByID(id:number): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/room/${id}`);
  }

  getLatestBookedRoom(): Observable<Room>{
    return this.httpclient.get<Room>(`${this.LocalUrl}/room/booking/latest`);
  }

  getMostBookedRoom(): Observable<Room>{
    return this.httpclient.get<Room>(`${this.LocalUrl}/room/mostbooked`);
  }

  getUsersByRoom(id:number): Observable<User[]>{
    return this.httpclient.get<User[]>(`${this.LocalUrl}/room/${id}/users`);
  }

  deleteRoom(id: number): Observable<any>{
    return this.httpclient.delete(`${this.LocalUrl}/room/delete/${id}`,{responseType: 'text'});
  }

  updateRoom(id: number,room:Room): Observable<Object>{
    return this.httpclient.put(`${this.LocalUrl}/room/update/${id}`,room);
  }
}
