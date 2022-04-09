import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeHomePageRoutingModule } from './trade-home-routing.module';

import { TradeHomePage } from './trade-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeHomePageRoutingModule
  ],
  declarations: [TradeHomePage]
})
export class TradeHomePageModule {}
