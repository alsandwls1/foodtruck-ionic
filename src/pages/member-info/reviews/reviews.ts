import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//pages
import { TruckInfoPage } from '../../../pages/truck-info/truck-info';
//providers
import { ReviewProvider } from '../../../providers/review/review';
import { TruckProvider } from '../../../providers/truck/truck';

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

  private error: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public reviewProvider: ReviewProvider,
    public truckProvider: TruckProvider,

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
        // console.log('review result = ' + result);
        let json = JSON.parse(result);
        // console.log('review result = ' + json[0].rerror);
        if(json[0].rerror) {
          this.error = json[0].rerror;
        } else {
          this.reviews = json;
        }
      });
  }

  //TODO:modal로 띄움
  goToTruckInfo(tid:string) {
    var truck;
    //tid으로 트럭정보 찾기
    truck = this.getTruckInfo(tid);

    console.log(truck);
    let profileModal = this.modalCtrl.create(TruckInfoPage, {
      truck: truck,
      modal: 'yes'
    });
    profileModal.present();
  }

  getTruckInfo(tid: string) {
    this.truckProvider.getTruckInfo(tid).subscribe(result => {
      console.log(result)
      return JSON.parse(result);
    });
  }

}
