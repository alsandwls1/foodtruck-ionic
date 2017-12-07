import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
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
import { FoodModifyPage } from '../pages/food-modify/food-modify';
import { ImagePage } from '../pages/image/image';
// import { TruckMapPage } from '../pages/truck-map/truck-map';

// ionic2-rating: $ npm install --save ionic2-rating
import { Ionic2RatingModule } from 'ionic2-rating';


//Page Module
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
    FoodModifyPage,
    ImagePage,
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
    //rating
    Ionic2RatingModule,

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
    FoodModifyPage,
    ImagePage,
    // TruckMapPage,
    // ReviewsPage,
    // FavoritesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatePipe,
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
