import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {allPosts, onePostID} from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}
    getAllPosts(): Observable<allPosts[]>{
    return this.http.get<allPosts[]>('https://jsonplaceholder.typicode.com/posts');
    }
    getSinglePost(onePost: number): Observable<onePostID[]>{
      return this.http.get<onePostID[]>(`https://jsonplaceholder.typicode.com/comments?postId=${onePost}`);
    }
}
