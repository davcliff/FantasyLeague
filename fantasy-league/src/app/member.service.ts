import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'api/members';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
        tap(_ => this.log('fetched members')),
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }

  getMemberNo404<Data>(id: number): Observable<Member> {
    const url = `${this.membersUrl}/?id=${id}`;
    return this.http.get<Member[]>(url)
      .pipe(
        map(members => members[0]), // returns a {0|1} element array
        tap(m => {
          const outcome = m ? `fetched` : `did not find`;
          this.log(`${outcome} member id=${id}`);
        }),
        catchError(this.handleError<Member>(`getMember id=${id}`))
      );
  }

  getMember(id: number): Observable<Member> {
    this.messageService.add(`MemberService: fetched member id=${id}`);
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, this.httpOptions).pipe(
      tap(_ => this.log(`updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, this.httpOptions).pipe(
      tap((newMember: Member) => this.log(`added member with id=${newMember.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }

  deleteMember(member: Member | number): Observable<Member> {
    const id = typeof member === 'number' ? member : member.id;
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted member id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }

  /* GET members whose name contains search term */
  searchMembers(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty member array.
      return of([]);
    }
    return this.http.get<Member[]>(`${this.membersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found members matching "${term}"`) :
        this.log(`no members matching "${term}"`)),
      catchError(this.handleError<Member[]>('searchMembers', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add(`MemberService: ${message}`);
  }

  // Need to adjust the members to come from a DB through http

  constructor(private messageService: MessageService,
              private http: HttpClient) { }
}
