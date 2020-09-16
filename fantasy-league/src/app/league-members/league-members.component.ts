import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-league-members',
  templateUrl: './league-members.component.html',
  styleUrls: ['./league-members.component.scss']
})
export class LeagueMembersComponent implements OnInit {

  members: Member[];

  getMembers(): void {
    this.memberService.getMembers()
        .subscribe(members => this.members = members);
  }

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

}
