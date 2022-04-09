import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'shop-home',
        loadChildren: () => import('../shop/shop-home/shop-home.module').then(m => m.ShopHomePageModule)
      },
      {
        path: 'shop-search',
        loadChildren: () => import('../shop/shop-search/shop-search.module').then(m => m.ShopSearchPageModule)
      },
      {
        path: '',
        redirectTo: 'shop-home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
