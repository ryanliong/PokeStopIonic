import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'trade-search',
        loadChildren: () => import('../trade/trade-search/trade-search.module').then(m => m.TradeSearchPageModule)
      },
      {
        path: 'my-listings',
        loadChildren: () => import('../trade/my-listings/my-listings.module').then(m => m.MyListingsPageModule)
      },
      {
        path: '',
        redirectTo: 'trade-search',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
