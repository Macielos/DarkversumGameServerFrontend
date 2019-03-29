import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatchService} from '../service/match.service';
import {Match} from '../model/Match';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  selectedMatch: Match;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.setMatch();
  }

  private setMatch() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchService.getMatch(id)
      .subscribe(match => this.handleMatch(match));
  }

  private handleMatch(match: Match) {
    this.selectedMatch = match;
  }

  goBack(): void {
    this.location.back();
  }
}
