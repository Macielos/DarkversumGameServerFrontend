import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerListComponent} from './players/player-list/player-list.component';
import {DashboardComponent} from './players/dashboard/dashboard.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import {MatchComponent} from './matches/match-list/match.component';
import {MatchDetailComponent} from './matches/match-detail/match-detail.component';
import {AuthGuard} from './security/auth.guard';
import {LoginComponent} from './security/login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'player-list', component: PlayerListComponent, canActivate: [AuthGuard] },
  { path: 'player-detail/:id', component: PlayerDetailComponent, canActivate: [AuthGuard] },
  { path: 'match-list', component: MatchComponent , canActivate: [AuthGuard] },
  { path: 'match-detail/:id', component: MatchDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

