import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {onePostID} from '../../models/post-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  onePost: onePostID[];
  constructor() {}
}
