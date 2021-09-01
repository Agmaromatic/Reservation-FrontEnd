import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Booking} from "../../../models/booking.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {RoomService} from "../../../services/room.service";
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-booking-by-userid',
  templateUrl: './booking-by-userid.component.html',
  styleUrls: ['./booking-by-userid.component.css']
})
export class BookingByUseridComponent implements OnInit,AfterViewInit {
  Bookings:Booking[];
  public dataSource = new MatTableDataSource<Booking>();
  columnsToDisplay = ['id','user','room','Unique BookingID','description','Start Date','End Date','confirmed','update'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private userService:UserService ,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(){
    this.userService.getbookingByUserId(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      this.Bookings=data;
      this.dataSource.data = data as Booking[];
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'user': return item.user.username;
        case 'room': return item.room.name;
        case 'Unique BookingID' : return item.code;
        case 'Start Date' : return item.startDate;
        case 'End Date' : return item.endDate;
        // @ts-ignore
        default: return item[property];

      }
    };
  }
}
