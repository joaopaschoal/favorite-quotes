import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { quotes } from '../../data/quotes';

import { QuotesPage } from '../quotes/quotes';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  public quoteCollection: { category: string, quotes: Array<Quote>, icon: string }[];
  public quotesPage = QuotesPage;

  constructor() {}

  public ngOnInit(): void {
    this.quoteCollection = quotes;
  }

}
