import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  getMembers(): Observable<Member[]> {
    // TODO: send the message AFTER getting the members
    this.messageService.add('MemberService: fetched members');
    return of(MEMBERS);
  }

  // Need to adjust the members to come from a DB through http

  constructor(private messageService: MessageService) { }
}
