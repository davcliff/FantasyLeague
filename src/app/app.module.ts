import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { LeagueMembersComponent } from './league-members/league-members.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './history/history.component';
import { AboutLeagueComponent } from './about-league/about-league.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LeagueMembersComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    AboutLeagueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
