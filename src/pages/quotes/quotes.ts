import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  public quoteCategory: { category: string, quotes: Array<Quote>, icon: string };

  constructor(
    public navParams: NavParams,
    public alertController: AlertController,
    public quotesService: QuotesService
  ) {}


  // Add elvis operator (?) in the template to use this approach:
  // ionViewDidLoad() {
  //   this.quoteCategory = this.navParams.data;
  // }

  ngOnInit(): void {
    this.quoteCategory = this.navParams.data;
  }

  onBtnFavoriteClick(quote: Quote) {
    const alert = this.alertController.create({
      title: 'Add Favorite',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote to your favorites?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes!! =D');
            this.quotesService.addQuoteToFavorites(quote);

          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No... =(');
          }
        }
      ]
    });
    alert.present();
  }

  onBtnUnfavoriteClick(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote): boolean {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
