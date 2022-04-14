import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  memberId: number;
  cardsToView: Card[];
  allSetsArray: number[];
  totalCards: number;
  currentCards: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private collectionService: CollectionService, private setService: SetService) {
    this.cardsToView = new Array;
    this.totalCards = 0;
    this.currentCards = 0;
  }

  ngOnInit() {
    
    this.loadData();

  }

  loadData() {
    //enter real way to get memberId here
    this.memberId = 1;

    this.collectionService.getCollectionByMemberId(this.memberId).subscribe({
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

}
