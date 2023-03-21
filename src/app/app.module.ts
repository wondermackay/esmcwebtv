import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProgCardComponent } from './prog-card/prog-card.component';
import { ProgBtnComponent } from './prog-btn/prog-btn.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { NavVideoComponent } from './nav-video/nav-video.component';
import { CardVideoComponent } from './card-video/card-video.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavBarComponent,
    ProgCardComponent,
    ProgBtnComponent,
    CardBodyComponent,
    NavVideoComponent,
    CardVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
