import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

//providers
import { ToastProvider } from '../../providers/toast/toast';
import { FoodProvider } from '../../providers/food/food';
/**
 * Generated class for the FoodModifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-modify',
  templateUrl: 'food-modify.html',
})
export class FoodModifyPage {
  //수정하기 전 메뉴정보
  beforeFood: any;
  //수정된 메뉴정보
  model:any={};

  url: string;
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastProvider: ToastProvider,
    private foodProvider: FoodProvider,
  ) {
    this.beforeFood = navParams.get('food');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodModifyPage');

  }////End ionViewDidLoad()

  //모달 창 닫음
  dismiss() {
    this.viewCtrl.dismiss();
  }

  //이미지 파일 찾기
  selectFile(event) {
    this.selectedFiles = event.target.files;
    // this.currentFileUpload = this.selectedFiles.item(0)
    this.model.fimage = this.selectedFiles.item(0)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //트럭 수정
  submit() {
    console.log(this.model)
    //이미지는 수정 안할 때
    if(this.selectedFiles === undefined) {
      this.foodProvider.modifyFood(this.model).subscribe(result => {
        this.toastProvider.presentToast( result, 'bottom', 'bottomToast');
        this.dismiss();
      });
    }
    //이미지 수정 할 때
    else {
      this.foodProvider.modifyFoodIncludeImg(this.model).subscribe(result => {
        console.log('result = '+ result);
        this.toastProvider.presentToast( result, 'bottom', 'bottomToast');
        this.dismiss();
      });
      // this.foodProvider.modifyTruckIncludeImgFile(this.truck).subscribe(() => {
      //   this.toastProvider.presentToast('수정되었습니다', 'bottom', 'bottomToast');
      //   this.dismiss();
      // });
    }
  }

}
