import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Toast를 위해 추가
import { ToastController } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: any = {};
  error: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public authService: AuthenticationProvider,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //회원가입 페이지로 이동
  goToJoin() {
    this.navCtrl.push('JoinPage');
  }

  //form에서 받은 email, password를 loginForm으로 받음
  login(loginForm) {
    this.authService.login(this.model.email, this.model.password)
      .then(result => {
        // console.log('login log = '+ result)
        let member = JSON.parse(result);
        console.log('login # member memail = ' + member.memail)
        if (member.merror === null) {
          //에러메세지가 없으면  HomePage로 이동
          this.navCtrl.push(HomePage);
        } else {
          this.presentToast(member.merror);
        }
      });
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
