import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'collect-home',
        loadChildren: () => import('../collect/collect-home/collect-home.module').then(m => m.CollectHomePageModule)
      },
      {
        path: 'browse',
        loadChildren: () => import('../collect/browse/browse.module').then(m => m.BrowsePageModule)
      },
      {
        path: 'my-collection',
        loadChildren: () => import('../collect/my-collection/my-collection.module').then(m => m.MyCollectionPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../collect/wishlist/wishlist.module').then(m => m.WishlistPageModule)
      },
      {
        path: 'viewSet/:setId',
        loadChildren: () => import('../collect/view-set/view-set.module').then(m => m.ViewSetPageModule)
      },
      {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
