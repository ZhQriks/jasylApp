import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TUI_PASSWORD_TEXTS, tuiInputPasswordOptionsProvider} from "@taiga-ui/kit";
import {of} from "rxjs";
import {TUI_BUTTON_DEFAULT_OPTIONS, TUI_TEXTFIELD_APPEARANCE} from "@taiga-ui/core";
import {TUI_ICONS_PATH} from '@taiga-ui/core';
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

  constructor() { }
  linkColor: string = '#29E879';
  ngOnInit(): void {
  }
  authForm = new FormGroup({
    emailValue: new FormControl('', [Validators.required, Validators.email]),
    passwordValue: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  submit(): void {
    console.log(this.authForm.value);
  }
}
