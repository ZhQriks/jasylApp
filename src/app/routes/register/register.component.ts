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
import { TUI_TEXTFIELD_APPEARANCE } from '@taiga-ui/core';
import { TuiDay } from '@taiga-ui/cdk';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
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
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthDate: new FormControl(new TuiDay(2005, 8, 5), [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordValue: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordValueAgain: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (
      this.registerForm.valid &&
      this.registerForm.value.passwordValue ===
        this.registerForm.value.passwordValueAgain
    ) {
      this.registerForm.removeControl('passwordValueAgain');
      this.http
        .post('http://localhost:3000/register', this.registerForm.value)
        .subscribe((res) => {
          this.registerForm.reset();
          this.router.navigate(['/login']);
        });
    }
  }
}
