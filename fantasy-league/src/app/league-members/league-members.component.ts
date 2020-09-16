import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-league-members',
  templateUrl: './league-members.component.html',
  styleUrls: ['./league-members.component.scss']
})
export class LeagueMembersComponent implements OnInit {

  members: Member[];

  selectedMember: Member;

  getMembers(): void {
    this.memberService.getMembers()
        .subscribe(members => this.members = members);
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent: Selected member id=${member.id}`);
  }

  constructor(private memberService: MemberService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMembers();
  }

}
