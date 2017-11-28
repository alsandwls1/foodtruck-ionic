import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { FoodRegistPage } from '../../pages/food-regist/food-regist';

import { FoodProvider } from '../../providers/food/food';
import { ReviewProvider } from '../../providers/review/review';

/**
 * Generated class for the TruckInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truck-info',
  templateUrl: 'truck-info.html',
})
export class TruckInfoPage {
  truck: any;
  foods: any[] = [];
  reviews: any[] = [];

  //등록되지 않은 메세지 처리
  foodError: string;
  reviewError: string;

  //modal처리시 필요
  modal: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public foodProvider: FoodProvider,
    public reviewProvider: ReviewProvider,
  ) {
    // console.log('TruckInfoPage constructor = ' + navParams.get('truck'));
    this.truck = navParams.get('truck');
    this.modal = navParams.get('modal');
    console.log(this.modal)
  }

  //음식등록모달
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(FoodRegistPage, { userId: this.truck.tid });
    profileModal.present();
  }

  //즐겨찾기를 통해서 들어왔을때 사용할 모달닫기
  dismiss() {
    console.log(this.modal);
    this.viewCtrl.dismiss();
  }

  //시작할 때 기동
  ionViewDidLoad() {
    console.log('truckinfo tid = ' + this.truck.tid);
    //메뉴리스트 불러오기
    this.foodProvider.getAllfoods(this.truck.tid).subscribe(res => {
      let json = res.json();
      // console.log('truck info truck food = '+json[0].ferror);
      // console.log(json);
      if (json[0].ferror) {
        this.foodError = json[0].ferror;
      } else {
        this.foods = res.json();
      }
    });

    //트럭리뷰 불러오기
    this.reviewProvider.getTruckReview(this.truck.tid).subscribe(res => {
      let json = res.json();
      // console.log('truck info truck review = '+json[0].rerror);
      if (json[0].rerror) {
        this.reviewError = json[0].rerror;
      } else {
        this.reviews = res.json();
      }
    });
    console.log('ionViewDidLoad TruckInfoPage');

    //푸드등록을 하면 비동기적으로 getAllfoods() 처리
    this.foodProvider.getObservable().subscribe(res => {
      if (res.check == 'true') {
        this.foodProvider.getAllfoods(this.truck.tid).subscribe(res => {
          console.log(res.json());
          this.foods = res.json();
        });
      }
    });
  }

}
