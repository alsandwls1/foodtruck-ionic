import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TruckListPage } from '../pages/truck-list/truck-list';
import { TruckInfoPage } from '../pages/truck-info/truck-info';
import { TruckRegistPage } from '../pages/truck-regist/truck-regist';
import { CanivalPage } from '../pages/canival/canival';
import { SupportPage } from '../pages/support/support';
import { LoginPage } from '../pages/login/login';
import { JoinPage } from '../pages/join/join';
import { FoodRegistPage } from '../pages/food-regist/food-regist';
import { TruckModifyPage } from '../pages/truck-modify/truck-modify';
import { ReviewWritePage } from '../pages/review-write/review-write';
// import { TruckMapPage } from '../pages/truck-map/truck-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AgmCoreModule } from '@agm/core';
// import { HTTP } from '@ionic-native/http';


//Page Module
// import { CanivalPageModule } from '../pages/canival/canival.module';
// import { JoinPageModule } from '../pages/join/join.module';
// import { SupportPageModule } from '../pages/support/support.module';
// import { LoginPageModule } from '../pages/login/login.module';
// import { TruckInfoPageModule } from '../pages/truck-info/truck-info.module';
// import { TruckListPageModule } from '../pages/truck-list/truck-list.module';
// import { TruckRegistPageModule } from '../pages/truck-regist/truck-regist.module';
// import { CanivalInfoPageModule } from '../pages/canival-info/canival-info.module';
import { TruckMapPageModule } from '../pages/truck-map/truck-map.module';
import { MemberInfoPageModule } from '../pages/member-info/member-info.module';

//providers
import { TruckProvider } from '../providers/truck/truck';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { MemberProvider } from '../providers/member/member';
import { CanivalProvider } from '../providers/canival/canival';
import { ReviewProvider } from '../providers/review/review';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { FoodProvider } from '../providers/food/food';
import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TruckListPage,
    TruckInfoPage,
    TruckRegistPage,
    CanivalPage,
    SupportPage,
    LoginPage,
    JoinPage,
    FoodRegistPage,
    TruckModifyPage,
    ReviewWritePage,
    // TruckMapPage,
    // ReviewsPage,
    // FavoritesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBFQmGdDApLDMW8Fp3F8VtOv9kwAg1xAUU',
    //   region: "kr",
    //   libraries: ["places"],
    // }),
    HttpModule,

    //Page Module
    TruckMapPageModule,
    MemberInfoPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TruckListPage,
    TruckInfoPage,
    TruckRegistPage,
    CanivalPage,
    SupportPage,
    LoginPage,
    JoinPage,
    FoodRegistPage,
    TruckModifyPage,
    ReviewWritePage,
    // TruckMapPage,
    // ReviewsPage,
    // FavoritesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider,
    LocalstorageProvider,
    MemberProvider,
    CanivalProvider,
    TruckProvider,
    ReviewProvider,
    FavoriteProvider,
    FoodProvider,
    ToastProvider,
  ]
})
export class AppModule { }
