import { Injectable } from '@angular/core';
import userData from '../../assets/data/users.json';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): User[]{
    return userData;
  }
}
