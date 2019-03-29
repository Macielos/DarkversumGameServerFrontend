import { Component, OnInit } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getTopPlayers();
  }

  getTopPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players.slice(0, 4));
  }
}
