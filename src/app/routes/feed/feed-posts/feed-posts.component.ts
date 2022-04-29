import { Component, OnInit } from '@angular/core';
export interface Post {
  title: string;
  img: string;
  date?: number;
}
@Component({
  selector: 'app-feed-posts',
  templateUrl: './feed-posts.component.html',
  styleUrls: ['./feed-posts.component.scss'],
})
export class FeedPostsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  posts: Post[] = [
    {
      title: 'Хочу выучить Angular компоненты',
      img: 'Я все еще учу компоненты',
      date: Date.now(),
    },
    {
      title: 'Следующий блок',
      img: 'Будет про директивы и еще про пайпы',
      date: Date.now(),
    },
    {
      title: 'HOW TO LEARN JS',
      img: 'HOW TO LEARN JS HOW TO LEARN JS BLA BLA ',
      date: Date.now(),
    },
  ];
}
