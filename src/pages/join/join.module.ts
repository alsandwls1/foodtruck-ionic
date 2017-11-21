import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinPage } from './join';

import { MemberProvider } from '../../providers/member/member';

@NgModule({
  declarations: [
    JoinPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinPage),
  ],
  providers: [
    MemberProvider,
  ],

})
export class JoinPageModule {}
