import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  paneEnabled = true;
  constructor(private menuController: MenuController, private router: Router) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'collect-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

  testLogout() {
    //TODO some logic to remove loggged in user from this session
    this.router.navigate(['/login'])
  }

  navigateToSettings() {
    this.router.navigate(['/tabs/tab1/settings'])
  }

}
