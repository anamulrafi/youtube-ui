import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { YoutubeHomePageComponent } from './youtube-home-page/youtube-home-page.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'youtube-home-page',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },

  {
    path: 'youtube-home-page',
    component: YoutubeHomePageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
