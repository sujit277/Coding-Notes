import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LookComponent } from './look/look.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LookComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
