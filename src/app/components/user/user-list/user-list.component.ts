import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import {AuthService} from "../../../services/auth-service.service";
import {Booking} from "../../../models/booking.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BookingService} from "../../../services/booking.service";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {

  Users:User[];
  public dataSource = new MatTableDataSource<User>();
  columnsToDisplay = ['id','username','firstName','lastName','email','details', 'update', 'delete'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private userService:UserService,public authsrv:AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    }





  private getUsers(){
    this.userService.getUsersList().subscribe(data=>{
      this.Users=data;
      this.dataSource.data = data as User[];

    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    }
  }



}
