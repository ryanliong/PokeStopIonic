import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { throwIfEmpty } from 'rxjs/operators';
import { Card } from 'src/app/models/card';
import { SetEntity } from 'src/app/models/set-entity';
import { CollectionService } from 'src/app/services/collection.service';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.page.html',
  styleUrls: ['./my-collection.page.scss'],
})
export class MyCollectionPage implements OnInit {

  cardsToView: Card[];
  allSetsArray: number[];
  totalCards: number;
  currentCards: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private collectionService: CollectionService, private setService: SetService, private alertController: AlertController) {
    this.cardsToView = new Array;
    this.totalCards = 0;
    this.currentCards = 0;
  }

  ngOnInit() {
    
    this.loadData();

  }

  loadData() {

    this.collectionService.getCollectionByMemberId().subscribe({
      next:(response)=>{
        this.cardsToView = response;
        this.currentCards = this.cardsToView.length;
        this.viewTotal();
        
      },
      error:(error) => {
        console.log('ViewCollectionPage' + error);
      }
    }) 
  }

  async viewTotal() {
    this.totalCards = 0;
    let allSets = new Set();
    
    for (var c of this.cardsToView) {
      allSets.add(c.setEntity.setId);
    }

    this.allSetsArray = <number[]> Array.from(allSets);

    for (var s of this.allSetsArray) {
      this.setService.getSetById(s).subscribe({
        next:(response) => {
          this.totalCards = this.totalCards + response.cardEntities.length;
        },
        error:(error) => {
          console.log('ViewCollectionPage' + error);
      }
      })
    }
  }

  async presentRemoveAlert(message: string) {
    const alert = await this.alertController.create({      
      header: 'Alert',
      subHeader: 'Removing Card From Collection',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('Collection remove alert called', role);
  }

  removeFromCollection(event, card) {
    this.collectionService.removeCardFromCollection(card.cardId).subscribe({
      next:(response) => {
        this.presentRemoveAlert("Card was removed from collection!");
        this.loadData();
      },
      error:(error)=> {
        this.presentRemoveAlert("Something went wrong woops!");
      }
    })
  }

}
