import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ReviewProvider } from '../../providers/review/review';
/**
 * Generated class for the ReviewWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-write',
  templateUrl: 'review-write.html',
})
export class ReviewWritePage {
  review: any = {};
  member:any;

  url: string;
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public reviewProvider: ReviewProvider,
  ) {
    this.review.rtruck = navParams.get('tid');
    this.review.rmember = navParams.get('email');
    console.log(this.review.rtruck +', '+ this.review.rmember)
    // if (window.localStorage.getItem('member')) {
    //   // this.member = JSON.parse(window.localStorage.getItem('member'));
    //   // this.review.rmember = this.member.memail;
    //   this.review.rmember = JSON.parse(window.localStorage.getItem('member')).memail;
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewWritePage');
  }

  //모달 창 닫기
  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.selectedFiles);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  submit() {
    if(this.selectedFiles === undefined) {
      //this.review.rimage가 없음
      this.addReview(this.review);
    } else {
      this.review.rimage = this.currentFileUpload;
      this.addReviewIncludeImgFile(this.review)
    }
    // this.food.file = this.currentFileUpload;
    // this.food.tid = this.tid;
    // console.log(this.currentFileUpload)
    // console.log(this.food);
    //
    // this.foodProvider.postTruck(this.food);
    // this.foodProvider.getObservable().subscribe(res => {
    //   if (res.check == 'true') {
    //     this.dismiss();
    //   }
    // })

  }

  //이미지 X
  addReview(review: any) {
    this.reviewProvider.addReview(review).subscribe(() => {
      console.log('???')
      this.dismiss();
    });
    // this.reviewService.addReview2(comment, score, email, truck);
    // alert('등록완료')
  }

  addReviewIncludeImgFile(review: any) {

  }


}
