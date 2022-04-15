import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'access-right-error',
    loadChildren: () => import('./access-right-error/access-right-error.module').then(m => m.AccessRightErrorPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-home',
    loadChildren: () => import('./shop/shop-home/shop-home.module').then(m => m.ShopHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout-details',
    loadChildren: () => import('./shop/checkout-details/checkout-details.module').then(m => m.CheckoutDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-details',
    loadChildren: () => import('./shop/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./shop/order-details/order-details.module').then(m => m.OrderDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'collect-home',
    loadChildren: () => import('./collect/collect-home/collect-home.module').then(m => m.CollectHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'browse',
    loadChildren: () => import('./collect/browse/browse.module').then(m => m.BrowsePageModule),
    canActivate: [AuthGuard]
  }, {
    path: 'trade-home',
    loadChildren: () => import('./trade/trade-home/trade-home.module').then(m => m.TradeHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trade-search',
    loadChildren: () => import('./trade/trade-search/trade-search.module').then(m => m.TradeSearchPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./shop/my-orders/my-orders.module').then(m => m.MyOrdersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./shop/cart/cart.module').then(m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-collection',
    loadChildren: () => import('./collect/my-collection/my-collection.module').then(m => m.MyCollectionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./collect/wishlist/wishlist.module').then(m => m.WishlistPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-listings',
    loadChildren: () => import('./trade/my-listings/my-listings.module').then(m => m.MyListingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs/tab2/viewSet/:setId',
    loadChildren: () => import('./collect/view-set/view-set.module').then(m => m.ViewSetPageModule)
  },
  {
    path: 'tabs/tab3/viewListing/:listingId',
    loadChildren: () => import('./trade/view-listing/view-listing.module').then(m => m.ViewListingPageModule)
  },
  {
    path: 'tabs/tab3/addListing/:listingId',
    loadChildren: () => import('./trade/add-listing/add-listing.module').then( m => m.AddListingPageModule)
  },
  {
    path: 'tabs/tab3/editListing/:listingId',
    loadChildren: () => import('./trade/edit-listing/edit-listing.module').then(m => m.EditListingPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
