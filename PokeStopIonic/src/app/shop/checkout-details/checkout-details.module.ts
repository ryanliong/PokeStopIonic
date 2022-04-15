import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutDetailsPageRoutingModule } from './checkout-details-routing.module';

import { CheckoutDetailsPage } from './checkout-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutDetailsPageRoutingModule
  ],
  declarations: [CheckoutDetailsPage]
})
export class CheckoutDetailsPageModule {


}
