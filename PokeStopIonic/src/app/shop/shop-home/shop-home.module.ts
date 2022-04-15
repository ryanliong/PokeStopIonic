import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShopHomePageRoutingModule } from './shop-home-routing.module';
import { ShopHomePage } from './shop-home.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopHomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ShopHomePage]
})
export class ShopHomePageModule { }
