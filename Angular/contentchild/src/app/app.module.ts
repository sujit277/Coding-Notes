import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { ProductwidgetComponent } from './productwidget/productwidget.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdashboardComponent,
    ProductwidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
