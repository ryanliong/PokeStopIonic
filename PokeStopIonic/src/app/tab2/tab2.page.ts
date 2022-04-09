import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  paneEnabled = true;
  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'collect-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

}
