import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TruckMapPage } from '../pages/truck-map/truck-map';
import { TruckListPage } from '../pages/truck-list/truck-list';
import { TruckInfoPage } from '../pages/truck-info/truck-info';
import { CanivalPage } from '../pages/canival/canival';
import { ReviewsPage } from '../pages/reviews/reviews';
import { SupportPage } from '../pages/support/support';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LoginPage } from '../pages/login/login';
import { JoinPage } from '../pages/join/join';
import { ProfilePage } from '../pages/profile/profile';

//providers
import { AuthenticationProvider } from '../providers/authentication/authentication';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  member: any;
  nickname: string;


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthenticationProvider
  ) {
    this.initializeApp();

    this.member = JSON.parse(window.localStorage.getItem('member'));

    // used for an example of ngFor and navigation
    //새로고침할 때, localStorage에 있는 정보를 참조해서 side bar의 목록 처리.
    if(this.member !== null) {
      //로그인함
      this.nickname = this.member.mnickname;
      this.pages = [
        { title: '푸드트럭홈', component: HomePage },
        { title: '트럭지도', component: TruckMapPage },
        { title: '트럭목록', component: TruckListPage },
        { title: '즐겨찾기', component: FavoritesPage },
        { title: '나의리뷰', component: ReviewsPage },
        { title: '축제정보', component: CanivalPage },
        { title: '고객센터', component: SupportPage },
        { title: '로그아웃', component: null },
      ];
    } else {
      //로그인 안함
      this.pages = [
        { title: '로그인', component: LoginPage },
        { title: '푸드트럭홈', component: HomePage },
        { title: '트럭 지도', component: TruckMapPage },
        { title: '트럭 목록', component: TruckListPage },
        { title: '축제 정보', component: CanivalPage },
        { title: '고객 센터', component: SupportPage },
      ];
    }

    // 로그인을 했을 때, 비동기방법으로 처리.
    // console.log('app.component start')
    this.authService.getObservable().subscribe(
      result => {
        console.log('result.login = '+result.login)
        if(result.login) {
          //로그인 함
          this.member = JSON.parse(window.localStorage.getItem('member'));
          this.nickname = this.member.mnickname;
          this.pages = [
            { title: '푸드트럭홈', component: HomePage },
            { title: '트럭지도', component: TruckMapPage },
            { title: '트럭목록', component: TruckListPage },
            { title: '즐겨찾기', component: FavoritesPage },
            { title: '나의리뷰', component: ReviewsPage },
            { title: '축제정보', component: CanivalPage },
            { title: '고객센터', component: SupportPage },
            { title: '로그아웃', component: null },
          ];
        } else {
          this.member = null;
          this.nickname = null;
          window.localStorage.removeItem('email');
          this.pages = [
            { title: '로그인', component: LoginPage },
            { title: '푸드트럭홈', component: HomePage },
            { title: '트럭 지도', component: TruckMapPage },
            { title: '트럭 목록', component: TruckListPage },
            { title: '축제 정보', component: CanivalPage },
            { title: '고객 센터', component: SupportPage },
          ];
        }
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    if(page.component) {
      this.nav.setRoot(page.component);
    } else {
      //로그아웃을 누르면 component가 없으므로 else로 빠짐.
      window.localStorage.removeItem('member');
      this.authService.logout();
      this.nav.setRoot(LoginPage);
      // this.nav.popToRoot(); //어떤 역할인지 파악안됨
    }

  }

  goToProfile() {
    this.nav.setRoot(ProfilePage);
  }
}
