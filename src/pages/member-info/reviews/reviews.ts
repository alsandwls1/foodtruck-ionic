import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReviewProvider } from '../../../providers/review/review';

/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {
  private reviews: Array<any>;
  private member: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewProvider: ReviewProvider,

  ) {
    this.member = JSON.parse(window.localStorage.getItem('member'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
    this.getMemberReview(this.member.memail);
  }

  //내가 남긴 모든 리뷰목록
  getMemberReview(email: string) {
    this.reviewProvider.getMemberReview(email)
      .subscribe(result => {
        console.log('review result = ' + result);
        let json = JSON.parse(result);
        this.reviews = json;
      });
  }
}
