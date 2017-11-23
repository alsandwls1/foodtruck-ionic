import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TruckListPage } from './truck-list';

import { TruckProvider } from '../../providers/truck/truck';

@NgModule({
  declarations: [
    TruckListPage,
  ],
  imports: [
    IonicPageModule.forChild(TruckListPage),
  ],
})
export class TruckListPageModule {}
