import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AgmCoreModule } from '@agm/core';
// import { HTTP } from '@ionic-native/http';

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
  ],
  providers: [
   TruckProvider,
  ],
})
export class TruckMapPageModule {}
