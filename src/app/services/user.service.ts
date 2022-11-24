import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//import userData from '../../assets/data/users.json';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = '../../assets/data/users.json';
  constructor(private http: HttpClient) { }
  // getUsers(): User[]{
  //   return userData;
  // }
  getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
}
