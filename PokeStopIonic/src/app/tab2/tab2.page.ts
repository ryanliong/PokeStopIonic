import { AuthenticationService } from '../services/authentication.service';
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
  constructor(private menuController: MenuController, private router: Router, private authService: AuthenticationService) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'collect-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

  async testLogout() {
    await this.authService.logout();
    this.router.navigate(['/homepage']);
  }

  navigateToSettings() {
    this.router.navigate(['/tabs/tab1/settings']);
  }

}
