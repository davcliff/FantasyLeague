import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';
import { Matchup } from './matchup';
import { LeagueConstants } from './league-constants';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  matchups: Matchup[] = [];
  private matchupsUrl = LeagueConstants.SLEEPER_API
                        + 'league/'
                        + LeagueConstants.SLEEPER_LEAGUE_ID
                        + '/matchups/8';

  getMatchups(): Observable<object> {
    return this.http.get(this.matchupsUrl);
  }

  constructor(private http: HttpClient) { }
}
