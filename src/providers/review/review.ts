import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


/*
  Generated class for the ReviewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewProvider {
  private reviewUrl: string = "http://localhost:8080/reviews";
  // private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  private subject = new Subject<any>();

  constructor(public http: Http) {
    console.log('Hello ReviewProvider Provider');
  }

  getObservable(): Observable<any> {
    console.log('ReviewProvider # getObservable() called!!')
    return this.subject.asObservable();
  }

  //내가 남긴 리뷰목록
  getMemberReview(email: string): Observable<any> {
    var url = `${this.reviewUrl}/member/${email}`;
    return this.http.get(url).map(res => res.text());
  }

  //트럭 리뷰목록
  getTruckReview(tid: string) {
    const url = this.reviewUrl + `/truck/${tid}`;
    return this.http.get(url);
  }

}
