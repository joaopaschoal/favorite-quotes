import { Quote } from '../data/quote.interface';


export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  public addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  public removeQuoteFromFavorites(quote: Quote) {
    const quoteIndex = this.favoriteQuotes.findIndex(qt => { return qt.id == quote.id });
    this.favoriteQuotes.slice(quoteIndex, 1);
  }

  public getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  public isQuoteFavorite(quote: Quote): boolean {
    return this.favoriteQuotes.findIndex(qt => {
      return qt.id == quote.id;
    }) >= 0;
  }

}
