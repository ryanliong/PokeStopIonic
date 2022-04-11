import { AuthenticationService } from '../services/authentication.service';
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
  constructor(private menuController: MenuController, private router:Router, private authService: AuthenticationService) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'trade-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

  async testLogout() {
    await this.authService.logout();
    this.router.navigate(['/homepage'])
  }

  navigateToSettings() {
    this.router.navigate(['/tabs/tab1/settings'])
  }

}
