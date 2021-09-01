import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Room} from "../../../models/room.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from "../../../services/auth-service.service";
import {RoomService} from "../../../services/room.service";


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit,AfterViewInit {
rooms:Room[]

  public dataSource = new MatTableDataSource<Room>();
  columnsToDisplay = ['id','name','department','reserved','details', 'update', 'delete'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public authsrv:AuthService,private roomService:RoomService) { }

  ngOnInit(): void {
    this.getRooms();
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

        case 'department' : return item.department.name;
        // @ts-ignore
        default: return item[property];

      }
    };
  }

  private getRooms(){
    this.roomService.getRoomsList().subscribe(data=>{
      this.rooms=data;
      this.dataSource.data = data as Room[];
    });
  }

  DeleteRoom(p: Room)
  {
    let conf = confirm("Are you sure ?");
    if (conf)
      this.roomService.deleteRoom(p.id).subscribe(() => {
        console.log("RoomDeleted");
      });
  }

}
