import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//add @angular module
import { HttpModule } from '@angular/http';
//storage: npm install --save @ionic/storage
// import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { TruckMapPage } from '../pages/truck-map/truck-map';
// import { TruckListPage } from '../pages/truck-list/truck-list';
// import { TruckInfoPage } from '../pages/truck-info/truck-info';
// import { CanivalPage } from '../pages/canival/canival';
// import { ReviewsPage } from '../pages/reviews/reviews';
// import { SupportPage } from '../pages/support/support';
// import { FavoritesPage } from '../pages/favorites/favorites';
// import { LoginPage } from '../pages/login/login';
// import { JoinPage } from '../pages/join/join';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AgmCoreModule } from '@agm/core';
// import { HTTP } from '@ionic-native/http';


//Page Module
import { CanivalPageModule } from '../pages/canival/canival.module';
import { JoinPageModule } from '../pages/join/join.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SupportPageModule } from '../pages/support/support.module';
import { TruckInfoPageModule } from '../pages/truck-info/truck-info.module';
import { TruckListPageModule } from '../pages/truck-list/truck-list.module';
import { TruckMapPageModule } from '../pages/truck-map/truck-map.module';
import { MemberInfoPageModule } from '../pages/member-info/member-info.module';
import { TruckRegistPageModule } from '../pages/truck-regist/truck-regist.module';
import { CanivalInfoPageModule } from '../pages/canival-info/canival-info.module';

//providers
import { TruckProvider } from '../providers/truck/truck';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { MemberProvider } from '../providers/member/member';
import { CanivalProvider } from '../providers/canival/canival';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // TruckMapPage,
    // TruckListPage,
    // TruckInfoPage,
    // CanivalPage,
    // ReviewsPage,
    // SupportPage,
    // FavoritesPage,
    // LoginPage,
    // JoinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // IonicStorageModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBFQmGdDApLDMW8Fp3F8VtOv9kwAg1xAUU',
    //   region: "kr",
    //   libraries: ["places"],
    // }),
    HttpModule,
    //Page Module
    CanivalPageModule,JoinPageModule,
    LoginPageModule,SupportPageModule,
    TruckInfoPageModule,TruckListPageModule,TruckMapPageModule,
    MemberInfoPageModule,TruckRegistPageModule,CanivalInfoPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // TruckMapPage,
    // TruckListPage,
    // TruckInfoPage,
    // CanivalPage,
    // ReviewsPage,
    // SupportPage,
    // FavoritesPage,
    // LoginPage,
    // JoinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    LocalstorageProvider,
    MemberProvider,
    CanivalProvider,
    // TruckProvider,
  ]
})
export class AppModule {}
