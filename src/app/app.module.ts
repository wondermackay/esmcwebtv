import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './website/home/home.component';
import { CardEmissionComponent } from './website/home/card-emission/card-emission.component';
import { EmissionComponent } from './website/emission/emission.component';
import { VideoComponent } from './website/video/video.component';
import { LiveComponent } from './website/live/live.component';
import { CardEpisodeComponent } from './website/video/card-episode/card-episode.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteComponent,
    HomeComponent,
    CardEmissionComponent,
    EmissionComponent,
    VideoComponent,
    LiveComponent,
    CardEpisodeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxYoutubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
