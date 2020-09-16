import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { MemberService } from '../member.service';

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

  members: Member[];

  selectedMember: Member;

  getMembers(): void {
    this.memberService.getMembers()
        .subscribe(members => this.members = members);
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

}
