import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the FoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodProvider {

  private subject = new Subject<any>();

  public foodUrl = 'http://localhost:8080/foods';

  constructor(public http: Http) {
    console.log('Hello FoodProvider Provider');
  }

  getObservable(): Observable<any> {
    console.log('FoodProvider # getObservable() working');
    return this.subject.asObservable();
  }

  getAllfoods(tid: string) {
    const url = `${this.foodUrl}/${tid}`;
    return this.http.get(url);
  }

  postTruck(food) {
    const url = `${this.foodUrl}/post`;
    let formdata: FormData = new FormData();

    formdata.append('name', food.name);
    formdata.append('price', food.price);
    formdata.append('description', food.description);
    formdata.append('file', food.file);
    formdata.append('tid', food.tid);

    return this.http.post(url, formdata)
      .subscribe(res => {
        this.subject.next({ check: 'true' });
      }
      );
  }

  //푸드 수정 - 이미지 X
  modifyFood(f: any): Observable<any> {
    const url = `${this.foodUrl}/update2`;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let food = { 'fid': f.fid, 'fname': f.fname, 'fprice': f.fprice, 'fdescription': f.fdescription };

    return this.http.post(url, JSON.stringify(food), { headers: headers })
      .map(res => {
        this.subject.next({ fresult: 'ok' });
        return res.text();
      });
  }

  //푸드 수정 - 이미지 o
  modifyFoodIncludeImg(f: any): Observable<any> {
    const url = `${this.foodUrl}/update`;
    let formdata: FormData = new FormData();
    console.log(f.fid)

    formdata.append('name', f.fname);
    formdata.append('price', f.fprice);
    formdata.append('description', f.fdescription);
    formdata.append('image', f.fimage);
    formdata.append('fid', f.fid);

    return this.http.post(url, formdata)
      .map(res => {
        this.subject.next({ fresult: 'ok' });
        return res.text();
      });
  }

  //푸드 삭제
  deleteMenu(fid: string): Observable<any> {
    const url = `${this.foodUrl}/delete/${fid}`;
    return this.http.delete(url).map(() => {
      this.subject.next({ fresult: 'ok' });
    });
  }


}
