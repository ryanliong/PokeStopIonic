import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeSearchPageRoutingModule } from './trade-search-routing.module';

import { TradeSearchPage } from './trade-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeSearchPageRoutingModule
  ],
  declarations: [TradeSearchPage]
})
export class TradeSearchPageModule {}
