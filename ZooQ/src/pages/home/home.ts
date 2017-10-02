import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QrReaderPage} from '../qr-reader/qr-reader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  login() {
    this.navCtrl.push(QrReaderPage);
}

}
