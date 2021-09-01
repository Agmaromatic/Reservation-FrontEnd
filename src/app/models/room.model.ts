import {Department} from "./department.model";

export class Room {
  id:number;
  name:string;
  reserved:boolean;
  department:Department;
}
