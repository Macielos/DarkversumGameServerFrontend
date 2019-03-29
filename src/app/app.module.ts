import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { MessagesComponent } from './messages/component/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './players/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatchComponent } from './matches/match-list/match.component';
import { MatchDetailComponent } from './matches/match-detail/match-detail.component';
import {BasicAuthInterceptor} from './security/basic-auth.interceptor';
import {ErrorInterceptor} from './security/error.interceptor';
import {LoginComponent} from './security/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MatchComponent,
    MatchDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
