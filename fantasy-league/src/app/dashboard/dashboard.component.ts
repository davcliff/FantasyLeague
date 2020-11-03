import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Matchup } from '../matchup';
import { MemberService } from '../member.service';
import { LeagueConstants } from '../league-constants';
import { MatchupService } from '../matchup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];
  matchups: object;

  constructor(private memberService: MemberService,
              private matchupService: MatchupService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);

    this.matchupService.getMatchups()
      .subscribe(matchups => this.matchups = matchups);
  }
}
