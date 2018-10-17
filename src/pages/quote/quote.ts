import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  public quote: Quote = new Quote();

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    this.quote = this.navParams.get('quote');
  }


  onCloseBtnClick(confirmDelete: boolean = false) {
    this.viewCtrl.dismiss({
      confirmDelete: confirmDelete
    });
  }

}
