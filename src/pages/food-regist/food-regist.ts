import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';

/**
* Generated class for the FoodRegistPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-food-regist',
  templateUrl: 'food-regist.html',
})
export class FoodRegistPage {

  tid: number;
  food: any = {};
  url: string;
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public foodProvider: FoodProvider
  ) {
    console.log('UserId', navParams.get('userId'));
    this.tid = navParams.get('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodRegistPage');
  }

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
    this.food.file = this.currentFileUpload;
    this.food.tid = this.tid;
    console.log(this.currentFileUpload)
    console.log(this.food);

    this.foodProvider.postTruck(this.food);
    this.foodProvider.getObservable().subscribe(res => {
      if (res.check == 'true') {
        this.dismiss();
      }
    })

  }
}
