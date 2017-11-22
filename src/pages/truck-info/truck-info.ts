import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TruckProvider } from '../../providers/truck/truck';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private truckService: TruckProvider,
  ) {
    console.log('TruckInfoPage constructor = '+ navParams.get('truck'));
    this.truck = navParams.get('truck');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckInfoPage');
  }

}
