import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiColorModule,
  TuiHintControllerModule,
  TuiTextfieldControllerModule,
  TuiLinkModule,
  TuiModeModule,
  TuiPrimitiveTextfieldModule,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { BottomMenuComponent } from './navigation/bottom-menu/bottom-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTabsModule,
} from '@taiga-ui/kit';
import { FormComponent } from './routes/login/form/form.component';
import { RegisterComponent } from './routes/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './routes/tasks/tasks.component';
import { FeedComponent } from './routes/feed/feed.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { StoreComponent } from './routes/store/store.component';
import { FeedPostsComponent } from './routes/feed/feed-posts/feed-posts.component';
import { FeedHubComponent } from './routes/feed/feed-hub/feed-hub.component';
import { TuiSheetModule } from '@taiga-ui/addon-mobile';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BottomMenuComponent,
    FormComponent,
    RegisterComponent,
    TasksComponent,
    FeedComponent,
    ProfileComponent,
    StoreComponent,
    FeedPostsComponent,
    FeedHubComponent,
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
    TuiLinkModule,
    TuiModeModule,
    TuiInputDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiPrimitiveTextfieldModule,
    TuiTabsModule,
    TuiSheetModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
