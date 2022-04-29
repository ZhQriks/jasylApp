import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TUI_TEXTFIELD_APPEARANCE } from '@taiga-ui/core';

@Component({
  selector: 'app-feed-hub',
  templateUrl: './feed-hub.component.html',
  styleUrls: ['./feed-hub.component.less'],
  providers: [
    {
      provide: TUI_TEXTFIELD_APPEARANCE,
      useValue: 'material-textfield',
    },
  ],
})
export class FeedHubComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
