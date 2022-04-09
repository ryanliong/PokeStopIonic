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
        path: '',
        redirectTo: 'collect-home',
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
