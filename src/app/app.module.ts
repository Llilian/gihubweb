import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { WebComponent } from './web/web.component';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from './gitservice/git.service';
import {RepoRequestService} from './repo-http/repo-request.service';
// import { RouterModule, Routes } from '@angular/router';
import { AlertService } from './alert-service/alert.service';
import { WebComponent } from './web/web.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

// cost route: Routes = [
//   {path: 'web', component: WebComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    NgProgressModule.forRoot(),
   NgProgressHttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    // RouterModule.forRoot(routes)
  ],
  // providers: [Git.Service, ProfileRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
