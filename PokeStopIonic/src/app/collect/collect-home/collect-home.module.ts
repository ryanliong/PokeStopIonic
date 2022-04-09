import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectHomePageRoutingModule } from './collect-home-routing.module';

import { CollectHomePage } from './collect-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectHomePageRoutingModule
  ],
  declarations: [CollectHomePage]
})
export class CollectHomePageModule {}
