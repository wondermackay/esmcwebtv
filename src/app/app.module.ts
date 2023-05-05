import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgCardComponent } from './prog-card/prog-card.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammeComponent } from './programme/programme.component';
import { PageVideoComponent } from './page-video/page-video.component';
import { LiveComponent } from './live/live.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProgCardComponent,
    HomeComponent,
    ProgrammeComponent,
    PageVideoComponent,
    LiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxYoutubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
