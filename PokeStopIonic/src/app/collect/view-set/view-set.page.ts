import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import { SetEntity } from 'src/app/models/set-entity';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-view-set',
  templateUrl: './view-set.page.html',
  styleUrls: ['./view-set.page.scss'],
})
export class ViewSetPage implements OnInit {

  setToView: SetEntity;
  cardsToView: Card[];
  setId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private setService: SetService) {
    this.setToView = new SetEntity();
    this.cardsToView = new Array();
   }

  ngOnInit() {
    this.setId = parseInt(this.activatedRoute.snapshot.paramMap.get('setId'));

    this.refreshSet();

    
  }

  refreshSet() {
    this.setService.getSetById(this.setId).subscribe({
      next:(response)=>{
        this.setToView = response;
        this.cardsToView = this.setToView.cardEntities;
      },
      error:(error)=> {
        console.log('ViewSetPage' + error);
      }
    })

  }

  back()
  {
    this.router.navigate(["/tabs/tab2/browse"]);
  }

}
