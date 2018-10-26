import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {

  }
 
  ionViewWillEnter(){
    this.menuCtrl.swipeEnable(true,'myMenu')

    this.menuCtrl.enable(true, 'myMenu');

  }
  gotoOrder(){
    this.navCtrl.push(OrderPage)
  }
}
