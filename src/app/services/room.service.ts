import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Room} from "../models/room.model";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private LocalUrl="http://localhost:8080/api/room";

  constructor(private httpclient :HttpClient) { }

  getRoomsList():Observable<Room[]> {
    return this.httpclient.get<Room[]>(`${this.LocalUrl}/all`);
  }

  getAvailableRoomsList(s:string,e:string):Observable<Room[]> {
    return this.httpclient.get<Room[]>(`${this.LocalUrl}/available?start=${s}&end=${e}`);
  }

  createRoom(room: Room): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/save`, room);
  }
  getRoomByID(id:number): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/${id}`);
  }

  deleteRoom(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.LocalUrl}/delete/${id}`);
  }

  updateRoom(id: number,room:Room): Observable<Object>{
    return this.httpclient.put(`${this.LocalUrl}/update/${id}`,room);
  }
}
