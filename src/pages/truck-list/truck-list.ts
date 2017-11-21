import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TruckProvider } from '../../providers/truck/truck';

@IonicPage()
@Component({
  selector: 'page-truck-list',
  templateUrl: 'truck-list.html',
})
export class TruckListPage {
  private trucks: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public truckService: TruckProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckListPage');
    this.truckService.getTrucks().subscribe(trucks => {
      let json = trucks.text();
      json = JSON.parse(json);
      this.trucks = json;
    });
  }

  openItem(truck: string) {
    this.navCtrl.push('TruckInfoPage', {
      truck: truck
    });
  }

}
