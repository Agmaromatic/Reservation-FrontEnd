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
import {LoginStatusComponent} from "./components/login-status/login-status.component";
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
    LoginStatusComponent,
    BookingListComponent,
    UpdateBookingComponent,
    BookRoomComponent,
    BookingHistoryComponent,
    CalendarViewComponent



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
