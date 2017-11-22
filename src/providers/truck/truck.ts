import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TruckProvider {
  public truckUrl = 'http://localhost:8080/trucks';

  private subject = new Subject<any>();

  constructor(public http: Http) {
    console.log('Hello TruckProvider Provider');
  }

  getObservable(): Observable<any> {
    console.log('getObservable() working');
    return this.subject.asObservable();
  }

  getTrucks(): Observable<any> {
    return this.http.get(this.truckUrl);
  }

  postTruck(truck) {
  // postTruck(truck): Observable<any> { //인홍이가 한 건데 에러가 뜬다....ㅠ
    const url = this.truckUrl + `/post`;
    let formdata: FormData = new FormData();
    let address: string;
    // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + truck.lat + "," + truck.lng + "&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
      .subscribe(response => {
        // console.log(response.json());
        // console.log(response.json().results[0].formatted_address);
        address = response.json().results[0].formatted_address;

        // console.log(address);

        formdata.append('name', truck.name);
        formdata.append('open', truck.open);
        formdata.append('close', truck.close);
        formdata.append('lat', truck.lat);
        formdata.append('lng', truck.lng);
        formdata.append('comment', truck.content);
        formdata.append('file', truck.file);
        formdata.append('address', address);
        formdata.append('email', truck.member);

        return this.http.post(url, formdata)
          .subscribe(res => {
            this.subject.next({ check: 'true' });
          }
          );
      });
  }



}
