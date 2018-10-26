import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  auth:any ="login";
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController) {
    this.menuCtrl.swipeEnable(false,'myMenu')

    this.menuCtrl.enable(false, "myMenu");
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
