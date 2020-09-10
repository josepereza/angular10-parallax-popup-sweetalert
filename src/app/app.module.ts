import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
