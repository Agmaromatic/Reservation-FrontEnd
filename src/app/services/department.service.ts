import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../models/room.model";
import {Booking} from "../models/booking.model";
import {User} from "../models/user";
import {Department} from "../models/department.model";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private LocalUrl=environment.API_URL;
  constructor(private httpclient :HttpClient) { }

  getdepartmentsList():Observable<Department[]> {
    return this.httpclient.get<Department[]>(`${this.LocalUrl}/department/all`);
  }



  createDepartment(department: Department): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/department/save`, department);
  }
  getDepartmentByID(id:number): Observable<Object>{
    return this.httpclient.get(`${this.LocalUrl}/department/${id}`);
  }




  deleteDepartment(id: number): Observable<any>{
    return this.httpclient.delete(`${this.LocalUrl}/department/delete/${id}`,{responseType: 'text'});
  }

  updateDepartment(id: number,department:Department): Observable<Object>{
    return this.httpclient.put(`${this.LocalUrl}/department/update/${id}`,department);
  }
}
