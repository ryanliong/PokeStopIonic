import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  paneEnabled = true;
  constructor(private menuController: MenuController, public sessionService: SessionService, private router: Router) {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'collect-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

  memberLogout(): void {
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentMember(null);
    this.router.navigate(['/login']);
	}

  navigateToSettings() {
    this.router.navigate(['/tabs/tab1/settings']);
  }

}
