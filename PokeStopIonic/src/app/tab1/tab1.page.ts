import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  paneEnabled = true;
  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'shop-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

}
