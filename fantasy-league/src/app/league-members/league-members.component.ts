import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-league-members',
  templateUrl: './league-members.component.html',
  styleUrls: ['./league-members.component.scss']
})
export class LeagueMembersComponent implements OnInit {

  member: Member = {
    id: 1,
    name: 'Cliff'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
