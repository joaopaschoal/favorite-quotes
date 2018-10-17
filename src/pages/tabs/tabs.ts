import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';


@Component({
  template: `
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  public favoritesPage = FavoritesPage
  public libraryPage = LibraryPage
}
