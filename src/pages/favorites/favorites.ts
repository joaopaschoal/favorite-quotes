import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'favorites-page',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  favoriteQuotes: Quote[];


  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController
  ) { }

  ionViewWillEnter() {
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
  }

  onFavoriteQuoteClick(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, { quote: quote });
    modal.onDidDismiss((data) => {
      if (data.confirmDelete) {
        this.quotesService.removeQuoteFromFavorites(quote);
        // this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
        const quoteIndex = this.quotesService.getFavoriteQuotes().findIndex(qt => {
          return qt.id == quote.id
        });
        this.favoriteQuotes.splice(quoteIndex, 1);
      }
    });
    modal.present();
  }

}
