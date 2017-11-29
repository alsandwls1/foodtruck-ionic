import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

  getObservable(): Observable<any> {
    console.log('FavoriteProvider # getObservable() called!!')
    return this.subject.asObservable();
  }

  getFavorites(email: string): Observable<any> {
    let url = `${this.favoriteUrl}/${email}`;
    return this.http.get(url).map(res => res.text());
  }

  addFavorite(tid: string): Observable<any> {
    console.log('FavoriteProvider # member-email = ' + this.member.memail + "," + tid);
    var url = `${this.favoriteUrl}/post`;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let hotlist = { "hMember": this.member.memail, "hTruck": tid };

    return this.http.post(url, JSON.stringify(hotlist), { headers: headers })
      .map(res => res.text());
  }

  deleteFavorite(hid: string): Observable<any> {
    var url = `${this.favoriteUrl}/${hid}`;
    return null;
  }
  // removeHotlist(hotlistdetail: HotlistDetail): Observable<string> {
  //     let url = `${this.hotlistUrl}/${hotlistdetail.hid}`;
  //     console.log('remove url='+url);
  //     return this.http.delete(url, {headers:this.headers})
  //     .map(res => {
  //       let json = res.text();
  //       // this.subject.next({ json });
  //       return json || {};
  //     })
  //     ._catch(this.handleError);
  //   }

  //즐겨찾기 체크
  checkFavorite(tid: string): Observable<any> {
    const url = `${this.favoriteUrl}/check/${tid}/${this.member.memail}`;

    return this.http.get(url).map(
      res => {
        //회원이 해당 트럭을 즐겨찾기 했다면 res.text()값이 존재
        if (res.text()) {
          console.log('if(res.text()) = ' + res.text());
          this.subject.next({ favo: 'ok' });
          return res.text();
        }
      }
    );
  }


}
