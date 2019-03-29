import { Component, OnInit } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService} from '../service/player.service';
import {MessageService} from '../../messages/service/messages.service';

@Component({
  selector: 'app-players',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  columns: string[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.columns = this.playerService.getColumns();
    this.refresh();
  }

  refresh() {
    this.playerService.getPlayers().subscribe(players => this.handlePlayers(players));
  }

  private handlePlayers(players: Player[]) {
    this.players = players;
  }

}
