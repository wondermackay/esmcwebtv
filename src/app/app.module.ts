import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgCardComponent } from './prog-card/prog-card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardVideoComponent } from './card-video/card-video.component';
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './programme/programme.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgCardComponent,
    CardBodyComponent,
    CardVideoComponent,
    HomeComponent,
    ProgrammeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
