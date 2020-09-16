import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueMembersComponent } from './league-members/league-members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

// where all routing is handled.
// new sections/routes need to be added here
const routes: Routes = [
  { path: 'members', component: LeagueMembersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
