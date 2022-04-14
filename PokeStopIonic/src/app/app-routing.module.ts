import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'access-right-error',
    loadChildren: () => import('./access-right-error/access-right-error.module').then( m => m.AccessRightErrorPageModule)
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
  },   {
    path: 'trade-home',
    loadChildren: () => import('./trade/trade-home/trade-home.module').then( m => m.TradeHomePageModule)
  },
  {
    path: 'trade-search',
    loadChildren: () => import('./trade/trade-search/trade-search.module').then( m => m.TradeSearchPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./shop/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./shop/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'my-collection',
    loadChildren: () => import('./collect/my-collection/my-collection.module').then( m => m.MyCollectionPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./collect/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'my-listings',
    loadChildren: () => import('./trade/my-listings/my-listings.module').then( m => m.MyListingsPageModule)
  },
  {
    path: 'tabs/tab2/viewSet/:setId',
    loadChildren: () => import('./collect/view-set/view-set.module').then( m => m.ViewSetPageModule)
  },
  {
    path: 'tabs/tab3/viewListing/:listingId',
    loadChildren: () => import('./trade/view-listing/view-listing.module').then( m => m.ViewListingPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
