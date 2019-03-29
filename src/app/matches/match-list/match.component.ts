import { Component, OnInit } from '@angular/core';
import {Match} from '../model/Match';
import {MatchService} from '../service/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  matches: Match[];
  columns: string[];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.columns = this.matchService.getColumns();
    this.refresh();
  }

  refresh() {
    this.matchService.getMatches().subscribe(matches => this.handleMatches(matches));
  }

  private handleMatches(matches: Match[]) {
    this.matches = matches;
  }
}
