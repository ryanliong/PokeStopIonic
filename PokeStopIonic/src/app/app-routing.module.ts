import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'shop-home',
    loadChildren: () => import('./shop/shop-home/shop-home.module').then( m => m.ShopHomePageModule)
  },
  {
    path: 'shop-search',
    loadChildren: () => import('./shop/shop-search/shop-search.module').then( m => m.ShopSearchPageModule)
  },
  {
    path: 'collect-home',
    loadChildren: () => import('./collect/collect-home/collect-home.module').then( m => m.CollectHomePageModule)
  },
  {
    path: 'browse',
    loadChildren: () => import('./collect/browse/browse.module').then( m => m.BrowsePageModule)
  }  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
