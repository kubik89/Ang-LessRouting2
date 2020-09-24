import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {allUs} from '../../models/user-models';
import {onePostID} from '../../models/post-model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent{
  gotUsers: allUs[];

  constructor(private userService: UserService) {
    this.userService.allUsers().subscribe(users => {
      this.gotUsers = users;
    });
  }
}
