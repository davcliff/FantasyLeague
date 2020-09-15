import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';

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

  members = MEMBERS;

  selectedMember: Member;
  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
