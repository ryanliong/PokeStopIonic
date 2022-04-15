import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutDetailsPage } from './checkout-details.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutDetailsPageRoutingModule {}
