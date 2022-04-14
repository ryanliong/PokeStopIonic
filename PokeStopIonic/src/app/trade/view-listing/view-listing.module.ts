import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewListingPageRoutingModule } from './view-listing-routing.module';

import { ViewListingPage } from './view-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewListingPageRoutingModule
  ],
  declarations: [ViewListingPage]
})
export class ViewListingPageModule {}
