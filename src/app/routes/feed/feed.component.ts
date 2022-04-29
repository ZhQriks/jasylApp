import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../../emitters/emitters';
import { ActivatedRoute, Router } from '@angular/router';
import {
  TUI_PASSWORD_TEXTS,
  tuiInputPasswordOptionsProvider,
} from '@taiga-ui/kit';
import { of } from 'rxjs';
import { TUI_TEXTFIELD_APPEARANCE } from '@taiga-ui/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: TUI_TEXTFIELD_APPEARANCE,
      useValue: 'material-textfield',
    },
  ],
})
export class FeedComponent implements OnInit {
  massage = 'You are not logged in';
  activeItemIndex = 0;

  authenticated = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/user', { withCredentials: true })
      .subscribe(
        (data: any) => {
          Emitters.authEmitter.emit(true);
          this.authenticated = true;
        },
        (err) => {
          Emitters.authEmitter.emit(false);
          this.authenticated = false;
        }
      );
  }
  posts() {
    this.router.navigate(['posts'], { relativeTo: this.route });
  }
  hub() {
    this.router.navigate(['hub'], { relativeTo: this.route });
  }
}
