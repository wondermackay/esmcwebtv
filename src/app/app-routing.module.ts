import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { EmissionComponent } from './website/emission/emission.component';
import { VideoComponent } from './website/video/video.component';
import { LiveComponent } from './website/live/live.component';
import { AuthComponent } from './website/auth/auth.component';
import { LoginComponent } from './website/auth/login/login.component';
import {MediaComponent} from './website/media/media/media.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UploadingComponent } from './admin/uploading/uploading.component';
import { VideouploadeComponent } from './admin/videouploade/videouploade.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'emission', component: EmissionComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'live', component: LiveComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  {path: 'media', component: MediaComponent},
  { path: 'dash', component: DashboardComponent },
  { path: 'uploading', component: UploadingComponent },
  { path: 'video-uploade', component: VideouploadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
