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
        path: 'cart',
        loadChildren: () => import('../shop/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'my-orders',
        loadChildren: () => import('../shop/my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
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
export class Tab1PageRoutingModule { }
