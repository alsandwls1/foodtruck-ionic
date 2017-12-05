import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodModifyPage } from './food-modify';

@NgModule({
  declarations: [
    FoodModifyPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodModifyPage),
  ],
})
export class FoodModifyPageModule {}
