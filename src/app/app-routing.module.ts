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
import {RoomListComponent} from "./components/room/room-list/room-list.component";
import {UpdateRoomComponent} from "./components/room/update-room/update-room.component";
import {UpdateUserComponent} from "./components/user/update-user/update-user.component";
import {AdminDashboardComponent} from "./components/user/admin-dashboard/admin-dashboard.component";
import {AddRoomComponent} from "./components/room/add-room/add-room.component";
import {AddComponent} from "./components/room/department/add/add.component";
import {BookingByRoomComponent} from "./components/room/booking-by-room/booking-by-room.component";
import {BookingByUseridComponent} from "./components/user/booking-by-userid/booking-by-userid.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'Users',component:UserListComponent},
  {path:'register',component:RegisterComponent},
  {path:"Create-User",component:CreateUserComponent},
  {path:"Bookings",component:BookingListComponent},
  {path: "updateBooking/:id", component: UpdateBookingComponent},
  {path: "updateUser/:id", component: UpdateUserComponent},
  {path: "updateRoom/:id", component: UpdateRoomComponent},
  {path:"user/Book",component:BookRoomComponent},
  {path:"user/BookingHistory",component:BookingHistoryComponent},
  {path:"bookings",component:CalendarViewComponent},
  {path:"rooms",component:RoomListComponent},
  {path:"dashboard",component:AdminDashboardComponent},
  {path:"Create-Room",component:AddRoomComponent},
  {path:"Create-Department",component:AddComponent},
  {path: "room/:id/bookings", component: BookingByRoomComponent},
  {path: "user/:id/bookings", component: BookingByUseridComponent}













];

@NgModule({
  imports: [RouterModule.forRoot(routes,{initialNavigation: "disabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
