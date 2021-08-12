import {User} from "./user";
import {Room} from "./room.model";

export class Booking {
  id:number;
  startDate:Date;
  endDate:Date;
  description:string;
  code:string;
  confirmed:boolean
  user:User
  room:Room

}
