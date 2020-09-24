import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {allUs} from '../models/user-models';
import {onePostID} from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  allUsers(): Observable<allUs[]>{
    return this.http.get<allUs[]>('https://jsonplaceholder.typicode.com/users');
  }
  getSingleUserIDPost(onePost: number): Observable<onePostID[]>{
    return this.http.get<onePostID[]>(`https://jsonplaceholder.typicode.com/comments?postId=${onePost}`);
  }
}
