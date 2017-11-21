// import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';

/*
  Generated class for the MemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberProvider {
  memberUrl: string = "http://localhost:8080/members";

  constructor(public http: Http) {
    console.log('Hello MemberProvider Provider');
  }

  join(email: string, password: string, nickname: string, registype: string): Observable<any> {
    let url = `${this.memberUrl}/regist`;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let member = { "mEmail": email, "mPassword": password, "mNickname": nickname, "mRegistype": registype };

    return this.http.post(url, JSON.stringify(member), {headers: headers})
    .map(res => res.text());
  }

  private handleError(res: Response) {
  console.log("Erroe = " + res);
  return Observable.throw(res.json().error || 'Server Down');
}
}
