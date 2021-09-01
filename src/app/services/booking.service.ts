import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../models/booking.model";
import {map, tap} from "rxjs/operators";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private LocalUrl=environment.API_URL;
  constructor(private httpclient :HttpClient) { }

  getBookingsList():Observable<Booking[]> {
    return this.httpclient.get<Booking[]>(`${this.LocalUrl}/booking/all`) .pipe(
      map(response => response),
      tap(Bookings => console.log("Booking array", Bookings))    // users array [Object, Object, Object]
    );
  }

  createBooking(booking: Booking): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/booking/save`, booking);
  }

  bookingsByID(id:number): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/booking/${id}`);
  }

  bookingsByCode(code:string): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/booking/findCODE/${code}`);
  }

  bookingsByNext(): Observable<string>{
    // @ts-ignore
    return this.httpclient.get<string>(`${this.LocalUrl}/booking/next`,{responseType: 'text'});
  }

  bookingsByRoomName(name: string): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/booking/all/room`);
  }

  deleteBooking(id: number): Observable<any>{
    return this.httpclient.delete(`${this.LocalUrl}/booking//delete/${id}`,{responseType: 'text'} );
  }

  updateBooking(id:number,booking: Booking): Observable<Object>{
    return this.httpclient.put(`${this.LocalUrl}/booking//update/${id}`,booking);
  }

  confirmBooking(id: number,confirmed: boolean): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/booking/confirm/${id}`,confirmed);
  }

}
