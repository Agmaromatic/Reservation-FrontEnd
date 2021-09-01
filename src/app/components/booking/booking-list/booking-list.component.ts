import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';

import {Booking} from "../../../models/booking.model";
import {BookingService} from "../../../services/booking.service";
import {AuthService} from "../../../services/auth-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit,AfterViewInit  {
Bookings:Booking[];
public dataSource = new MatTableDataSource<Booking>();
columnsToDisplay = ['id','user','room','Unique BookingID','description','Start Date','End Date','confirmed','details', 'update', 'delete'];

@ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(public authsrv:AuthService,private bookingService:BookingService) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.setSortHeader();
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

  ngOnInit(): void {
    this.getBookings();
  }


  setSortHeader() {
    this.sort.active = 'break';
    this.sort.direction = 'desc';
    this.sort.sortChange.emit({ active: this.sort.active, direction: this.sort.direction });

    const sortHeader = this.sort.sortables.get('break');
    if (sortHeader) {
      // @ts-ignore
      sortHeader['_setAnimationTransitionState']({toState: 'active'});
    }
  }

  private getBookings(){
    this.bookingService.getBookingsList().subscribe(data=>{
      this.Bookings=data;
      this.dataSource.data = data as Booking[];

    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    }
  }

  DeleteBooking(p: Booking)
  {
    let conf = confirm("Are you sure ?");
    if (conf)
      this.bookingService.deleteBooking(p.id).subscribe(() => {
        console.log("Booking deleted");
        this.DeleteBookingFromTable(p);
      });
  }


  public confirm = (id: number) => {
    console.log(id);
this.bookingService.confirmBooking(id,true).subscribe(data =>{
    console.log(data);
  },
  error=> console.log(error));

  }

  public redirectToUpdate = (id: string) => {

  }


  DeleteBookingFromTable(prod : Booking) {
    this.dataSource.data.forEach((cur, index) => {
      if(prod.id=== cur.id) {
        this.dataSource.data.splice(index, 1);
      }
    });
  }

}
