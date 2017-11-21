import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TruckInfoPage } from './truck-info';

import { TruckProvider } from '../../providers/truck/truck';

@NgModule({
  declarations: [
    TruckInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TruckInfoPage),
  ],
  providers: [
   TruckProvider,
  ],
})
export class TruckInfoPageModule {}
