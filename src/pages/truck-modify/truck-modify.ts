import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

//pages
import { TruckInfoPage } from '../../pages/truck-info/truck-info';

//providers
import { TruckProvider } from '../../providers/truck/truck';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { ToastProvider } from '../../providers/toast/toast';


/**
 * Generated class for the TruckModifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truck-modify',
  templateUrl: 'truck-modify.html',
})
export class TruckModifyPage {
  truck: any;
  model: any = {};

  url: string;
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastProvider: ToastProvider,
    private truckProvider: TruckProvider,
  ) {
    // console.log(navParams.get('truck'));
    this.truck = navParams.get('truck');
    this.model.topen = this.truck.topen;
    this.model.tclose = this.truck.tclose;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckModifyPage');
  } ////End ionViewDidLoad()

  //트럭 수정
  submit() {
    console.log(this.model)
    //이미지는 수정 안할 때
    if(this.selectedFiles === undefined) {
      this.model.timage = this.truck.timage;
      this.truckProvider.modifyTruck(this.model).subscribe(() => {
        this.toastProvider.presentToast('수정되었습니다', 'bottom', 'bottomToast');
        this.dismiss();
      });
    }
    //이미지 수정 할 때
    else {
      this.truckProvider.modifyTruckIncludeImgFile(this.model).subscribe(() => {
        this.toastProvider.presentToast('수정되었습니다', 'bottom', 'bottomToast');
        this.dismiss();
      });
    }
  }

  //트럭위도,경도로 주소알아내기
  agm() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('위도 경도 = '+position.coords.latitude+", "+position.coords.longitude)
      this.model.tlat = position.coords.latitude;
      this.model.tlng = position.coords.longitude;
      //트럭 주소 수정
      this.truckProvider.getTruckAddress(position.coords.latitude, position.coords.longitude)
        .subscribe(result => {
          console.log(result);
          this.model.taddress = result;
        })
    });
  }

  //이미지 파일 찾기
  selectFile(event) {
    this.selectedFiles = event.target.files;
    // this.currentFileUpload = this.selectedFiles.item(0)
    this.model.timage = this.selectedFiles.item(0)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //모달 창 닫기
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
