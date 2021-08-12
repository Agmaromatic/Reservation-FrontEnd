import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../models/booking.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private LocalUrl="http://localhost:8080/api/booking";
  private HostedUrl="http://reservationsystemspringboot-env.eba-wmy77kmm.eu-west-3.elasticbeanstalk.com/api/booking";
  constructor(private httpclient :HttpClient) { }

  getBookingsList():Observable<Booking[]> {
    return this.httpclient.get<Booking[]>(`${this.LocalUrl}/all`) .pipe(
      map(response => response),
      tap(Bookings => console.log("Booking array", Bookings))    // users array [Object, Object, Object]
    );
  }

  createBooking(booking: Booking): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/save`, booking);
  }
  bookingsByID(id:number): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/${id}`);
  }

  bookingsByRoomName(name: string): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/all/room`);
  }

  deleteBooking(id: number): Observable<any>{
    return this.httpclient.delete(`${this.LocalUrl}/delete/${id}`,{responseType: 'text'} );
  }

  updateBooking(id:number,booking: Booking): Observable<Object>{
    return this.httpclient.put(`${this.LocalUrl}/update/${id}`,booking);
  }

  confirmBooking(id: number,confirmed: boolean): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/confirm/${id}`,confirmed);
  }

}
