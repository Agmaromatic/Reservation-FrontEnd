import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {CalendarEvent, CalendarEventAction, CalendarView} from 'angular-calendar';
import {BookingService} from "../../../services/booking.service";
import {Booking} from "../../../models/booking.model";
import {isSameDay, isSameMonth} from 'date-fns';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../../services/auth-service.service";
import {UserService} from "../../../services/user.service";




@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  items: any;
  events: Array<CalendarEvent<{ time: any }>> = [];
  public bookings:Booking[];
  calendarOptions: CalendarOptions;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  modalData: {
    action: string;
    event: CalendarEvent;
  };



  constructor(private bookingService:BookingService,private userService:UserService,private modal:NgbModal,private authservice:AuthService) { }
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

  getBookings(){

    this.bookingService.getBookingsList().subscribe(Bookings =>{
      this.bookings = Bookings;
      for (let x of this.bookings) {
        this.events = [
          ...this.events,
          {
            start:new Date(x.startDate),
            end:new Date(x.endDate),
            title:" Room name : "+x.room.name+ " , User : " +x.user.username+" ,  Description : "+x.description,
          }
        ]
      }
    });

  }

  getBookingsByLoggedUser(){

    this.userService.getbookingHistoryList().subscribe(Bookings =>{
      this.bookings = Bookings;
      for (let x of this.bookings) {
        this.events = [
          ...this.events,
          {
            start:new Date(x.startDate),
            end:new Date(x.endDate),
            title:" Room name : "+x.room.name+ " ,  Description : "+x.description,
          }
        ]
      }
    });

  }

  ngOnInit(): void {
    if(this.authservice.isAdmin())
    this.getBookings();
    else {
      this.getBookingsByLoggedUser();
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
