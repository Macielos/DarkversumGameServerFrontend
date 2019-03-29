import {Injectable} from '@angular/core';
import {Player} from '../model/Player';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../messages/service/messages.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../config/config.service';
import {subscribeToArray} from 'rxjs/internal-compatibility';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private messageService: MessageService, private configService: ConfigService, private httpClient: HttpClient) {
  }

  getPlayers(): Observable<Player[]> {
    this.messageService.add('fetching players');

    return (this.httpClient
      .get(this.configService.playersUrl, this.configService.httpJsonOptions) as Observable<Player[]>)
      .pipe(tap(data => this.handlePlayers(data),
        error => this.handleError(error)));
  }

  getPlayer(id: string): Observable<Player> {
    this.messageService.add(`fetching player id=${id}`);
    return (this.httpClient.get(this.configService.playersUrl + '?id=' + id, this.configService.httpJsonOptions) as Observable<Player>)
      .pipe(tap(data => this.handlePlayer(data),
          error => this.handleError(error)));
  }

  getColumns(): string[] {
    return ['id', 'name', 'status', 'region', 'created at', 'updated at'];
  }

  private handlePlayer(player: Player) {
    this.messageService.add('Got player ' + player.name);
  }

  private handlePlayers(players: Player[]) {
    this.messageService.add('Got ' + players.length + ' players');
  }

  private handleError(error: any) {
    console.log('Error: ' + error);
    this.messageService.add('Error: ' + error.name + ', ' + error.status + ', ' + error.message);
  }

}
