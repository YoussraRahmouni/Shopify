import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: User;
  userId?: any;
  //userList: User[] = [];

  constructor(private activatedRoute : ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe((data: User[]) => this.user = data.find( user => user.id == this.userId));
    // this.userList = this.userService.getUsers();
    // this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.user = this.userList.find( user => user.id == this.userId);
  }
  

}
