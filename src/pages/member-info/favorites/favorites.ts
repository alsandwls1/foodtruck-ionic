import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TruckInfoPage } from '../../../pages/truck-info/truck-info';

import { FavoriteProvider } from '../../../providers/favorite/favorite';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favorites: Array<any>;

  member: any;
  message: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteProvider: FavoriteProvider,
  ) {
    this.member = JSON.parse(window.localStorage.getItem('member'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.getFavorites(this.member.memail);
  }

  getFavorites(email:string) {
    this.favoriteProvider.getFavorites(email)
      .subscribe(result => {
        // console.log(JSON.parse(result));
        let json = JSON.parse(result);
        this.favorites = json;
      });
  }

  goToTruckInfo(f) {
    this.navCtrl.push(TruckInfoPage, {
      truck: f
    });
  }

}
