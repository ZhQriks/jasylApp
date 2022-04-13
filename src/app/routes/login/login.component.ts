import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}


  ngOnInit(): void {
    this.document.body.classList.add('login');
  }
  ngOnDestroy() {
    this.document.body.classList.remove('login');
  }
}
