import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSetPageRoutingModule } from './view-set-routing.module';

import { ViewSetPage } from './view-set.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSetPageRoutingModule
  ],
  declarations: [ViewSetPage]
})
export class ViewSetPageModule {}
