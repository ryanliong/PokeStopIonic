import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeHomePage } from './trade-home.page';

const routes: Routes = [
  {
    path: '',
    component: TradeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeHomePageRoutingModule {}
