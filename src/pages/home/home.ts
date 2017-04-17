import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Data } from '../../providers/data';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data) {
    this.data.getData().subscribe(res => {
        this.users = res.results;
    })
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.data.getData().subscribe(res => {
        for (let user of res.results) {
          this.users.push(user)
        }
      });
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000)
  }

}
