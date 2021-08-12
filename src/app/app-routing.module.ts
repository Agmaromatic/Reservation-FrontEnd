import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import {RegisterComponent} from "./components/user/register/register.component";
import {BookingListComponent} from "./components/booking/booking-list/booking-list.component";
import {UpdateBookingComponent} from "./components/booking/update-booking/update-booking.component";
import {BookRoomComponent} from "./components/user/book-room/book-room.component";
import {BookingHistoryComponent} from "./components/user/booking-history/booking-history.component";
import {CalendarViewComponent} from "./components/booking/calendar-view/calendar-view.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'Users',component:UserListComponent},
  {path:'register',component:RegisterComponent},
  {path:"Create-User",component:CreateUserComponent},
  {path:"Bookings",component:BookingListComponent},
  {path: "updateBooking/:id", component: UpdateBookingComponent},
  {path:"user/Book",component:BookRoomComponent},
  {path:"user/BookingHistory",component:BookingHistoryComponent},
  {path:"bookings",component:CalendarViewComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes,{initialNavigation: "disabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
