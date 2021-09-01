import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../services/auth-service.service";
import {User} from "../../../models/user";
import {Booking} from "../../../models/booking.model";
import {UserService} from "../../../services/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit,AfterViewInit {
  Bookings:Booking[];
  public dataSource = new MatTableDataSource<Booking>();
  columnsToDisplay = ['room','Unique BookingID','description','Start Date','End Date','confirmed','cancel'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public authsrv:AuthService,private userService:UserService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.setSortHeader();
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'room':
          return item.room.name;
        case 'Unique BookingID' :
          return item.code;
        case 'Start Date' :
          return item.startDate;
        case 'End Date' :
          return item.endDate;
        default: // @ts-ignore
          return item[property];

      }
    };
  }

  ngOnInit(): void {
    this.getBookingsHistory();
  }
  getBookingsHistory(){
    this.userService.getbookingHistoryList().subscribe(data=>{
      this.Bookings=data;
      this.dataSource.data = data as Booking[];
    });
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


  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    }
  }

  cancelBooking(Booking: Booking) {
    this.userService.cancelBooking(Booking.code).subscribe(() => {
      console.log("Booking deleted");
  },
      error=> {
          alert(error.error);
      }
      );
}
}
