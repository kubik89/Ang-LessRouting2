import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './custom/all-users/all-users.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './custom/user/user.component';
import { AllPostsComponent } from './custom/all-posts/all-posts.component';
import { PostComponent } from './custom/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, children: [
        {path: 'posts/:someId', component: UserComponent}
        ]},
      {path: 'posts', component: AllPostsComponent, children: [
          {path: 'body/:bodyId', component: PostComponent}
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
