import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Toast를 위해 추가
import { ToastController } from 'ionic-angular';

import { MemberProvider } from '../../providers/member/member';


/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {
  model: any = {};

  // joinForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public memberService: MemberProvider,
    private toastCtrl: ToastController,
    // public formBuilder: FormBuilder,
  ) {
    // this.joinForm = formBuilder.group({
    //   email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.minLength(8), Validators.maxLength(30)])],
    //   password: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    //   nickname: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }

  join(joinForm) {
    this.memberService.join(this.model.email, this.model.password, this.model.nickname, this.model.registype)
      .subscribe(res => {
        let member = JSON.parse(res);
        if (member.merror !== null) {
          this.presentToast(member.merror);
        } else {
          this.navCtrl.push('LoginPage');
        }
      });

  }

  goToLogin() {
    this.navCtrl.push('LoginPage');
  }

  //Toast
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
