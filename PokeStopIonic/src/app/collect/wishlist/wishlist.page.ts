import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Card } from 'src/app/models/card';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  cardsToView: Card[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private wishlistService: WishlistService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadData();
    
  }

  loadData() {
    this.wishlistService.getWishlistByMemberId().subscribe({
      next:(response)=>{
        this.cardsToView = response;
      },
      error:(error) => {
        console.log('ViewWishlistPage' + error);
      }
    })
  }

  async presentRemoveAlert(message: string) {
    const alert = await this.alertController.create({      
      header: 'Alert',
      subHeader: 'Removing Card From Wishlist',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('Wishlist remove alert called', role);
  }

  removeFromWishlist(event, card) {
    this.wishlistService.removeCardFromWishlist(card.cardId).subscribe({
      next:(response) => {
        this.presentRemoveAlert("Card was removed from wishlist!");
        this.loadData();
      },
      error:(error)=> {
        this.presentRemoveAlert("Something went wrong woops!");
      }
    })
  }

  getCardImagePath(variable) {
    return "http://192.168.50.69:8080/PokeStopJsf-war/resources/images/cardUploadedImages/" + variable;
  }

}
