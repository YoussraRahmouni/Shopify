import { Component, OnInit } from '@angular/core';
import userData from '../../assets/data/users.json';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  userList: any[] = userData;
}
