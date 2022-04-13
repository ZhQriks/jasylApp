import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TUI_SANITIZER,
    TuiButtonModule,
    TuiColorModule, TuiHintControllerModule, TuiTextfieldControllerModule, TuiLinkModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { BottomMenuComponent } from './navigation/bottom-menu/bottom-menu.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import { FormComponent } from './routes/login/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BottomMenuComponent,
    FormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiNotificationsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiButtonModule,
        TuiColorModule,
        TuiInputPasswordModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
        TuiLinkModule
    ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
