import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private LocalUrl="http://localhost:8080/api/user";
private HostedUrl="http://reservationsystemspringboot-env.eba-wmy77kmm.eu-west-3.elasticbeanstalk.com/api/user/all";
  constructor(private httpclient :HttpClient) { }

  getUsersList():Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.LocalUrl}/all`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpclient.post(`${this.LocalUrl}/save`, user);
  }
}
