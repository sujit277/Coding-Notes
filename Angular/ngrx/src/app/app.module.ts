import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounteroutputComponent } from './counter/counteroutput/counteroutput.component';
import { CounterbuttonsComponent } from './counter/counterbuttons/counterbuttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter_reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounteroutputComponent,
    CounterbuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
