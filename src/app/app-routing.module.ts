import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { FeedComponent } from './routes/feed/feed.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { StoreComponent } from './routes/store/store.component';
import { FeedPostsComponent } from './routes/feed/feed-posts/feed-posts.component';
import { FeedHubComponent } from './routes/feed/feed-hub/feed-hub.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'tasks', component: TasksComponent },
  {
    path: 'feed',
    component: FeedComponent,
    children: [
      {
        path: 'posts',
        component: FeedPostsComponent,
      },
      {
        path: 'hub',
        component: FeedHubComponent,
      },
    ],
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'store', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
