import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  paneEnabled = true;
  constructor(private menuController: MenuController, private router:Router) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'trade-menu');
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
