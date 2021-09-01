import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";
import { CommonModule } from '@angular/common';
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {UserService} from "./services/user.service";
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { UpdateBookingComponent } from './components/booking/update-booking/update-booking.component';
import { BookRoomComponent } from './components/user/book-room/book-room.component';
import { BookingHistoryComponent } from './components/user/booking-history/booking-history.component';

import {FullCalendarModule} from "@fullcalendar/angular";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarViewComponent } from './components/booking/calendar-view/calendar-view.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {MatTableExporterModule} from "mat-table-exporter";
import { RoomListComponent } from './components/room/room-list/room-list.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { UpdateRoomComponent } from './components/room/update-room/update-room.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { AdminDashboardComponent } from './components/user/admin-dashboard/admin-dashboard.component';
import { AddRoomComponent } from './components/room/add-room/add-room.component';
import { AddComponent } from './components/room/department/add/add.component';
import { BookingByRoomComponent } from './components/room/booking-by-room/booking-by-room.component';
import { BookingByUseridComponent } from './components/user/booking-by-userid/booking-by-userid.component';

FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin
]);




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    BookingListComponent,
    UpdateBookingComponent,
    BookRoomComponent,
    BookingHistoryComponent,
    CalendarViewComponent,
    RoomListComponent,
    UpdateRoomComponent,
    UpdateUserComponent,
    AdminDashboardComponent,
    AddRoomComponent,
    AddComponent,
    BookingByRoomComponent,
    BookingByUseridComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    CommonModule,
    NgbModule,
    MatTableExporterModule,
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [authInterceptorProviders,UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule { }
