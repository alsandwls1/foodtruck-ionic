import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  private loginUrl: string = "http://localhost:8080/members";
  private subject = new Subject<any>();

  constructor(public http: Http) {
    console.log('Hello AuthenticationProvider Provider');
  }

  //로그인처리가 되었는지 비동기방식으로 처리하기 위해서
  getObservable(): Observable<any> {
    console.log('AuthenticationProvider # getObservable() working');
    return this.subject.asObservable();
  }

  login(email: string, password: string): Promise<any> {
    const url = `${this.loginUrl}/login`;
    let member = { "mEmail": email, "mPassword": password };
    let headers = new Headers({ 'Content-Type': 'application/json;  charset=utf-8', 'Accept': 'application/json' });

    console.log('member = ' + JSON.stringify(member));

    return this.http.post(url, JSON.stringify(member), { headers: headers }).toPromise().then(
      res => {
        let member = res.json();
        console.log('AuthenticationProvider # error =' + member.merror);

        if (member.merror !== null) {
          return JSON.stringify(member) || {};
        } else {
          //에러메세지가 없으면 세션에 저장
          window.localStorage.setItem('member', JSON.stringify(member));
          console.log('AuthenticationProvider # Storage = ' + window.localStorage.getItem('member'));
          this.subject.next({ login: 'true' });
          return JSON.stringify(member) || {};
        }
      }
    );
  }

  logout() {
    const url = `${this.loginUrl}/logout`;
    this.subject.next({ login: null });
    return this.http.get(url);
  }

}
