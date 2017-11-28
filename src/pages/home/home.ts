// import { Component, ViewChild } from '@angular/core';
// import { NavController, Slides } from 'ionic-angular';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { TruckMapPage } from '../truck-map/truck-map';
import { TruckListPage } from '../truck-list/truck-list';
import { CanivalPage } from '../canival/canival';
import { SupportPage } from '../support/support';
import { LoginPage } from '../login/login';
import { ReviewsPage } from '../member-info/reviews/reviews';
import { FavoritesPage } from '../member-info/favorites/favorites';
import { MemberInfoPage } from '../member-info/member-info';

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  session: any;

  obj = [
    { "TruckMapPage": TruckMapPage },
    { "TruckListPage": TruckListPage },
    { "CanivalPage": CanivalPage },
    { "SupportPage": SupportPage },
    { "MemberInfoPage": MemberInfoPage },
    // { "ReviewsPage" :  ReviewsPage },
    // { "FavoritesPage" :  FavoritesPage },
  ]


  constructor(public navCtrl: NavController) {
    //스토리지 확인해서 로그인 상태인지 확인
    if (window.localStorage.getItem('member')) {
      this.session = JSON.parse(window.localStorage.getItem('member'));
    }
  }

  goToPages(page: string) {
    for (let i = 0; i < this.obj.length; i++) {
      if (Object.keys(this.obj[i])[0] === page) {
        console.log(Object.keys(this.obj[i])[0]);
        this.navCtrl.push(this.obj[i][page]);
      }
    }
  }

  goToFavorite() {
    this.navCtrl.push(MemberInfoPage, {
      tab2: FavoritesPage
    });
  }

}
