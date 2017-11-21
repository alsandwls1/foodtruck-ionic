import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Truck } from '../../_models/truck.model';

@Injectable()
export class TruckProvider {
  public truckUrl = 'http://localhost:8080/trucks';

  constructor(public http: Http) {
    console.log('Hello TruckProvider Provider');
  }

  getTrucks() : Observable<any> {
    return this.http.get(this.truckUrl);
  }

  getTruckInfo(tid: string): Observable<any> {
    let url = `${this.truckUrl}/${tid}`;
    console.log('url='+url)
    return this.http.get(url)
  }

}
