import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//스토리지때문에 만들었는데 일단 보류... ㅠㅠ
@Injectable()
export class LocalstorageProvider {

  constructor(public http: Http,private storage:Storage) {
    console.log('Hello LocalstorageProvider Provider');
  }

  //store the email address
    setEmail(email){
    this.storage.set('email',email);
    }

}
