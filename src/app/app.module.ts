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
import { AuthComponent } from './website/auth/auth.component';
import { LoginComponent } from './website/auth/login/login.component';
import {FormsModule} from "@angular/forms";
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
    AuthComponent,
    LoginComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, NgxYoutubePlayerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
