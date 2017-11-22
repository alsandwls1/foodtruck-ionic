import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReviewsPage } from './reviews/reviews';
import { FavoritesPage } from './favorites/favorites';
import { ProfilePage } from './profile/profile';

/**
 * Generated class for the MemberInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-info',
  templateUrl: 'member-info.html',
})
export class MemberInfoPage {
  tab1: any ;
  tab2: any ;
  tab3: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ReviewsPage;
    this.tab2 = FavoritesPage;
    this.tab3 = ProfilePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberInfoPage');
  }

}
