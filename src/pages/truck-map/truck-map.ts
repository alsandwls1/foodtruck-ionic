import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { TruckProvider } from '../../providers/truck/truck';

import { TruckInfoPage } from '../../pages/truck-info/truck-info';

@IonicPage()
@Component({
  selector: 'page-truck-map',
  templateUrl: 'truck-map.html',
})
export class TruckMapPage{
  public trucks: Array<any>;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public mapTypeId: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public truckProvider: TruckProvider,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckMapPage');

    this.zoom = 16;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.mapTypeId = 'roadmap'; // 'roadmap'|'hybrid'|'satellite'|'terrain'

    //등록된 모든 truck정보 불러오기
    this.truckProvider.getTrucks().subscribe(res => {
      let json = res.text();
      json = JSON.parse(json);
      this.trucks = json;
      console.log(this.trucks)
    });

    //set current position
    this.setCurrentPosition();
  }

  // ngOnInit() {
  //   this.zoom = 16;
  //   this.latitude = 39.8282;
  //   this.longitude = -98.5795;
  //   this.mapTypeId = 'roadmap'; // 'roadmap'|'hybrid'|'satellite'|'terrain'
  //   //set current position
  //   this.setCurrentPosition();
  // }

  private setCurrentPosition() {
    // console.log('set='+ navigator);
    // console.log('set='+ navigator.geolocation.getCurrentPosition);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.latitude = position.coords.latitude;
        console.log('lat'+this.latitude+', lng'+this.longitude)
        this.longitude = position.coords.longitude;
        this.zoom = 16;
        console.log(position.coords);
      });
    }
  }

  //트럭 정보 페이지
  goToTruckInfo(truck) {
    this.navCtrl.push(TruckInfoPage, {truck: truck});
  }

}
