import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewListingPage } from './view-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ViewListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewListingPageRoutingModule {}
