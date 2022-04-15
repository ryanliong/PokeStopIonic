import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';

import { SessionService } from '../services/session.service';
import { CartPage } from '../shop/cart/cart.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  paneEnabled = true;
  constructor(private menuController: MenuController, public sessionService: SessionService, private router: Router, private modalController: ModalController) { }

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'shop-menu');
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

  async openCart() {
    const modal = await this.modalController.create({
      component: CartPage
    });
    await modal.present();
  }


}
