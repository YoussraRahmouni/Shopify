import { Component, OnInit } from '@angular/core';
import userData from '../../../assets/data/users.json';
import { User } from '../../user';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }
  
  userList: User[] = userData;
  
  onSelect(user: User): void {

  }
}
