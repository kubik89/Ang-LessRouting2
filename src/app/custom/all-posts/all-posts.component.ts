import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {allPosts} from '../../models/post-model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent{
  userPosts: allPosts[];
  onePost: allPosts[];
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(allpostsss => {
      this.userPosts = allpostsss;
    });
  }
  getOnePost(onePost: allPosts): void {
    this.postService.getSinglePost(onePost.id).subscribe(value => {
      console.log(value);
      this.onePost = value;
    });
  }
}
