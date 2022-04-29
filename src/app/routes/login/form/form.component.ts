import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  TUI_PASSWORD_TEXTS,
  tuiInputPasswordOptionsProvider,
} from '@taiga-ui/kit';
import { of } from 'rxjs';
import {
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_TEXTFIELD_APPEARANCE,
} from '@taiga-ui/core';
import { TUI_ICONS_PATH } from '@taiga-ui/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputPasswordOptionsProvider({
      icons: {
        hide: 'tuiIconLockLarge',
        show: 'tuiIconLockOpenLarge',
      },
    }),
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of(['']),
    },
    {
      provide: TUI_TEXTFIELD_APPEARANCE,
      useValue: 'material-textfield',
    },
  ],
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  linkColor: string = '#29E879';
  ngOnInit(): void {}
  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  submit(): void {
    if (this.authForm.valid) {
      this.http
        .post('http://localhost:3000/login', this.authForm.getRawValue(), {
          withCredentials: true,
        })
        .subscribe((res) => this.router.navigate(['/feed']));
    }
  }
}
