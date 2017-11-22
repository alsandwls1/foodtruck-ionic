import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


/*
Generated class for the CanivalProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class CanivalProvider {
  public canivalUrl = 'http://localhost:8080/canival';
  constructor(public http: Http) {
    console.log('Hello CanivalProvider Provider');
  }

  getCanivalList(): Observable<any> {
    return this.http.get(this.canivalUrl);
  }

  getCanivalInfo(key): Observable<any>{
    const CanivalInfo = `${this.canivalUrl}/view/${key}`;
    return this.http.get(CanivalInfo);
  }

}
