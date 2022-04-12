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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private collectionService: CollectionService, private setService: SetService) {
    this.cardsToView = new Array;
  }

  ngOnInit() {
    //enter real way to get memberId here
    this.memberId = 1;
    
    this.collectionService.getCollectionByMemberId(this.memberId).subscribe({
      next:(response)=>{
        this.cardsToView = response;
      },
      error:(error) => {
        console.log('ViewCollectionPage' + error);
      }
    }) 
  }

  // viewTotal() {
  //   let allSets = new Set();
    
  //   for (let i = 0; i <= this.cardsToView.length; i++) {
  //     allSets.add(this.cardsToView[i].setEntity.setId);
  //   }

  //   this.allSetsArray = <number[]> Array.from(allSets);

  //   for (let i = 0; i <= allSets.size; i++) {
  //     this.setService.getSetById(this.allSetsArray[i]).subscribe({
  //     next:(response)=>{
  //       this.totalCards += response.cardEntities.length;
  //     },
  //     error:(error) => {
  //       console.log('ViewCollectionPage' + error);
  //     }
  //   })
  //   }

  //   console.log(this.totalCards);
  // }

}
