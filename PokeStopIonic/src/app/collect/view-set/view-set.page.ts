import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Card } from 'src/app/models/card';
import { SetEntity } from 'src/app/models/set-entity';
import { CollectionService } from 'src/app/services/collection.service';
import { SetService } from 'src/app/services/set.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-view-set',
  templateUrl: './view-set.page.html',
  styleUrls: ['./view-set.page.scss'],
})
export class ViewSetPage implements OnInit {

  setToView: SetEntity;
  cardsToView: Card[];
  setId: number;
  memberId: number;
  cardsInCollection: Card[];
  cardsInWishlist: Card[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private setService: SetService, private alertController: AlertController, private collectionService: CollectionService, private wishlistService: WishlistService) {
    this.setToView = new SetEntity();
    this.cardsToView = new Array();
    this.cardsInCollection = new Array();
  }

  ngOnInit() {
    this.refreshSet();
  }

  refreshSet() {
    this.setId = parseInt(this.activatedRoute.snapshot.paramMap.get('setId'));

    this.collectionService.getCollectionByMemberId().subscribe({
      next:(response)=>{
        this.cardsInCollection = response;

        this.setService.getSetById(this.setId).subscribe({
          next:(response)=>{
            this.setToView = response;
            this.cardsToView = this.setToView.cardEntities;
            
            this.showOwnedCards();

            this.wishlistService.getWishlistByMemberId().subscribe({
              next:(response)=> {
                this.cardsInWishlist = response;

                this.showWishedCards();
              }
            })
          },
          error:(error)=> {
            console.log('ViewSetPage' + error);
          }
        })
      },
      error:(error) => {
        console.log('collection cannot be retrieved in view set' + error);
      }
    })
  }

  async showOwnedCards() {
    
    for (var c of this.cardsToView) {
      if (this.cardsInCollection.some(card => card['cardId'] === c.cardId)) {
        c.gotten = true;
      } else {
        c.gotten = false;
      }
    }
  }

  async showWishedCards() {
    for (var c of this.cardsToView) {
      if (this.cardsInWishlist.some(card => card['cardId'] === c.cardId)) {
        c.wished = true;
      } else {
        c.wished = false;
      }
    }
  }

  async presentCollectionAlert(message: string) {
    const alert = await this.alertController.create({      
      header: 'Alert',
      subHeader: 'Adding Card to Collection',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('Collection alert called', role);
  }

  async presentWishlistAlert(message: string) {
    const alert = await this.alertController.create({      
      header: 'Alert',
      subHeader: 'Adding Card to Wishlist',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('Wishlist alert called', role);
  }

  addToCollection(event, card) {
    this.collectionService.addCardToCollection(card.cardId).subscribe({
      next:(response) => {
        this.presentCollectionAlert("Card was added to collection!");
        this.refreshSet();
      },
      error:(error)=> {
        this.presentCollectionAlert("Card already in collection!");
      }
    })
    
  }

  addToWishlist(event, card) {
    this.wishlistService.addCardToWishlist(card.cardId).subscribe({
      next:(response) => {
        this.presentWishlistAlert("Card was added to wishlist!");
        this.refreshSet();
      },
      error:(error)=> {
        this.presentWishlistAlert("Card already in wishlist!");
      }
    })
  }

  getSetImagePath(variable) {
    return "http://192.168.50.69:8080/PokeStopJsf-war/resources/images/setUploadedImages/" + variable;
  }

  getCardImagePath(variable) {
    return "http://192.168.50.69:8080/PokeStopJsf-war/resources/images/cardUploadedImages/" + variable;
  }

  back()
  {
    this.router.navigate(["/tabs/tab2/browse"]);
  }

}
