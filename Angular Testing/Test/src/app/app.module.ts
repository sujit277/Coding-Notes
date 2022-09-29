import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './Pipes/Strength/strength.pipe';
import { PostsComponent } from './Components/posts/posts.component';
import { PostComponent } from './Components/post/post.component';
import { HttpClientModule } from "@angular/common/http"
import { PostService } from './Services/Post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
