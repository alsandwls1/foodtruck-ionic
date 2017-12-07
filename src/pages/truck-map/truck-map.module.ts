import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AgmCoreModule } from '@agm/core';
// import { HTTP } from '@ionic-native/http';

// ionic2-rating: $ npm install --save ionic2-rating
import { Ionic2RatingModule } from 'ionic2-rating';

import { TruckMapPage } from './truck-map';

import { TruckProvider } from '../../providers/truck/truck';


@NgModule({
  declarations: [
    TruckMapPage,
  ],
  imports: [
    IonicPageModule.forChild(TruckMapPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFQmGdDApLDMW8Fp3F8VtOv9kwAg1xAUU',
      region: "kr",
      libraries: ["places"],
    }),
    Ionic2RatingModule,
  ],
  providers: [
   TruckProvider,
  ],
})
export class TruckMapPageModule {}
