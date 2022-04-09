import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeSearchPage } from './trade-search.page';

const routes: Routes = [
  {
    path: '',
    component: TradeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeSearchPageRoutingModule {}
