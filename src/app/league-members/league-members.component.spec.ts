import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueMembersComponent } from './league-members.component';

describe('LeagueMembersComponent', () => {
  let component: LeagueMembersComponent;
  let fixture: ComponentFixture<LeagueMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
