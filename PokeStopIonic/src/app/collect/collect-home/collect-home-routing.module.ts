import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectHomePage } from './collect-home.page';

const routes: Routes = [
  {
    path: '',
    component: CollectHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectHomePageRoutingModule {}
