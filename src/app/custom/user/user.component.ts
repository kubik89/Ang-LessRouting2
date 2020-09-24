import { Component, OnInit } from '@angular/core';
import {allUs} from '../../models/user-models';
import {UserService} from '../../services/user.service';
import {onePostID} from '../../models/post-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  gotUsers: allUs[];
  oneUserPost: onePostID[];
  constructor(private singleServ: UserService) {
    this.singleServ.allUsers().subscribe(value => {
      this.gotUsers = value;
    });
  }
  getOnePostOfUser(onePost: onePostID): void {
    this.singleServ.getSingleUserIDPost(onePost.id).subscribe(value => {
      console.log(value);
      this.oneUserPost = value;
    });
  }
}
