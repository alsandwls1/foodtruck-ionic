import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {
  private favoriteUrl: string = "http://localhost:8080/hotlist";

  private subject = new Subject<any>();

  private member: any;

  constructor(public http: Http) {
    console.log('Hello FavoriteProvider Provider');

    if (window.localStorage.getItem('member')) {
      this.member = JSON.parse(window.localStorage.getItem('member'));
    }
  }

  // getObservable(): Observable<any> {
  //   console.log('FavoriteProvider # getObservable() called!!')
  //   return this.subject.asObservable();
  // }

  getFavorites(email: string): Observable<any> {
    let url = `${this.favoriteUrl}/${email}`;
    return this.http.get(url).map(res=>res.text());
  }

}
