import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
//pages
import { FoodRegistPage } from '../../pages/food-regist/food-regist';
//providers
import { FoodProvider } from '../../providers/food/food';
import { ReviewProvider } from '../../providers/review/review';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { ToastProvider } from '../../providers/toast/toast';

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

  //즐겨찾기
  check: boolean = false;
  hid: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private toastProvider: ToastProvider,
    public foodProvider: FoodProvider,
    public reviewProvider: ReviewProvider,
    public favoriteProvider: FavoriteProvider,
  ) {
    // console.log('TruckInfoPage constructor = ' + navParams.get('truck'));
    this.truck = navParams.get('truck');
    this.modal = navParams.get('modal');
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
    console.log('ionViewDidLoad TruckInfoPage');
    //메뉴리스트 불러오기
    this.foodProvider.getAllfoods(this.truck.tid).subscribe(res => {
      let json = res.json();
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
      if (json[0].rerror) {
        this.reviewError = json[0].rerror;
      } else {
        this.reviews = res.json();
      }
    });

    //푸드등록을 하면 비동기적으로 getAllfoods() 처리
    this.foodProvider.getObservable().subscribe(res => {
      if (res.check == 'true') {
        this.foodProvider.getAllfoods(this.truck.tid).subscribe(res => {
          console.log(res.json());
          this.foods = res.json();
        });
      }
    });

    //즐겨찾기 체크
    this.checkFavorite(this.truck.tid);
    //즐겨찿기 추가 시, 버튼 삭제
    this.favoriteProvider.getObservable().subscribe(result => {
      if (result.favo === 'ok') {
        this.check = true;
      }
    });
  }

  //즐겨찾기 추가
  addFavorite(tid: any) {
    this.favoriteProvider.addFavorite(tid).subscribe(() => {
      //화면 갱신을 위해서 호출
      this.favoriteProvider.checkFavorite(tid);
      this.toastProvider.presentToast('추가되었습니다.', 'bottom', 'bottomToast');

    });
  }

  // //즐겨찾기 삭제
  // deleteFavorite(hid: any) {
  //   console.log('deleteFavorite hid = ' + hid);
  //   this.favoriteProvider.deleteFavorite(hid).subscribe(() => {
  //     //화면 갱신을 위해서 호출
  //     this.checkFavorite(this.truck.tid);
  //     this.toastProvider.presentToast('삭제되었습니다.', 'bottom', 'bottomToast');
  //   });
  // }
  //
  //즐겨찾기 체크
  checkFavorite(tid: string) {
    this.favoriteProvider.checkFavorite(this.truck.tid).subscribe(res => {
      console.log(res);
      this.hid = JSON.parse(res).hid;
    });
  }

}
