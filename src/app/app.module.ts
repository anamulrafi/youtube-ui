import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { LicenseComponent } from './license/license.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { YoutubeHomePageComponent } from './youtube-home-page/youtube-home-page.component';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    ContentComponent,
    LicenseComponent,
    ToolbarComponent,
    UserProfileComponent,
    YoutubeHomePageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
