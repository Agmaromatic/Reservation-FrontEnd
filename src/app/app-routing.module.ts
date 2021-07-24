import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'Users',component:UserListComponent},
  {path:"Create-User",component:CreateUserComponent},
  {path:'',redirectTo:'Users',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
