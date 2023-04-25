import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageVideoComponent } from './page-video/page-video.component';
import { ProgrammeComponent } from './programme/programme.component';
import { LiveComponent } from './live/live.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'emission', component: ProgrammeComponent},
  {path: 'video/:id', component: PageVideoComponent},
  {path: 'live', component: LiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
