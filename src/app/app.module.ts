import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { OrderPage } from '../pages/order/order';
import { RejectReasonPage } from '../pages/reject-reason/reject-reason';
import { PaymentSuccessfulPage } from '../pages/payment-successful/payment-successful';

import { ProfilePage } from '../pages/profile/profile';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { PaymentPage } from './../pages/payment/payment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OrderPage,
    RejectReasonPage,
    PaymentSuccessfulPage,
    ProfilePage,
    ContactUsPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OrderPage,
    RejectReasonPage,
    PaymentSuccessfulPage,
    ProfilePage,
    ContactUsPage,
    PaymentPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
