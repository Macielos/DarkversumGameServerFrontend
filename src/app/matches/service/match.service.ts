import { Injectable } from '@angular/core';
import {MessageService} from '../../messages/service/messages.service';
import {ConfigService} from '../../config/config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Match} from '../model/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private messageService: MessageService, private configService: ConfigService, private httpClient: HttpClient) {
  }

  getMatches(): Observable<Match[]> {
    this.messageService.add('fetching matches');

    return (this.httpClient
      .get(this.configService.matchesUrl, this.configService.httpJsonOptions) as Observable<Match[]>)
      .pipe(tap(data => this.handleMatches(data),
        error => this.handleError(error)));
  }

  getMatch(id: string): Observable<Match> {
    this.messageService.add(`fetching match id=${id}`);
    return (this.httpClient.get(this.configService.matchesUrl + '?id=' + id, this.configService.httpJsonOptions) as Observable<Match>)
      .pipe(tap(data => this.handleMatch(data),
        error => this.handleError(error)));
  }

  getColumns(): string[] {
    return ['id', 'status', 'players', 'created at', 'updated at'];
  }

  private handleMatch(match: Match) {
    this.messageService.add('Got match ' + match.id);
  }

  private handleMatches(matches: Match[]) {
    this.messageService.add('Got ' + matches.length + ' matches');
  }

  private handleError(error: any) {
    console.log('Error: ' + error);
    this.messageService.add('Error: ' + error.name + ', ' + error.status + ', ' + error.message);
  }
}
