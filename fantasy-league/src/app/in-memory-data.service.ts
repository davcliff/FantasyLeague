import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const members = [
      { id: 11, name: 'Cliff' },
      { id: 12, name: 'Paul' },
      { id: 13, name: 'Sved' },
      { id: 14, name: 'Spitzer' },
      { id: 15, name: 'Mawby' },
      { id: 16, name: 'Brad' },
      { id: 17, name: 'Buc' },
      { id: 18, name: 'Cole' },
      { id: 19, name: 'Connor' },
      { id: 20, name: 'Stache' }
    ];
    return {members};
  }

  // Overrides the genId method to ensure that a member always has an id.
  // If the members array is empty,
  // the method below returns the initial number (11).
  // if the members array is not empty, the method below returns the highest
  // member id + 1.
  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }

  constructor() { }
}
