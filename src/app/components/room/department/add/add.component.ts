import { Component, OnInit } from '@angular/core';
import {Room} from "../../../../models/room.model";
import {DepartmentService} from "../../../../services/department.service";
import {Router} from "@angular/router";
import {Department} from "../../../../models/department.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  department:Department =new Department();
  constructor(private departmentService:DepartmentService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveDepartment();
    this.goToRoomList();
  }

  saveDepartment(){
    this.departmentService.createDepartment(this.department).subscribe(data =>{
        console.log(data);
        alert(this.department.name+" Saved succesfully")
      },
      error=> console.log(error));
  }
  private goToRoomList() {
    this.router.navigate(['/rooms']);
  }
}
