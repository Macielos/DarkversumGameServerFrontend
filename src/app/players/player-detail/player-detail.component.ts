import {Component, Input, OnInit} from '@angular/core';
import { Player } from '../model/Player';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../service/player.service';
import {MessageService} from '../../messages/service/messages.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  selectedPlayer: Player;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.setPlayer();
  }

  private setPlayer() {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => this.handlePlayer(player));
  }

  private handlePlayer(player: Player) {
    this.selectedPlayer = player;
  }

  goBack(): void {
    this.location.back();
  }
}
