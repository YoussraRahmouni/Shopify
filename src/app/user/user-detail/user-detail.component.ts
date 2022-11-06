import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import userData from '../../../assets/data/users.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: User;
  userId?: any;
  userList: User[] = userData;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user = this.userList.find( user => user.id == this.userId);
  }
  

}
