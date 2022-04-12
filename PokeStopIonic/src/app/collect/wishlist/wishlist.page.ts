import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  memberId: number;
  cardsToView: Card[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private wishlistService: WishlistService) { }

  ngOnInit() {
    //enter real way to get memberId here
    this.memberId = 1;
    
    this.wishlistService.getWishlistByMemberId(this.memberId).subscribe({
      next:(response)=>{
        this.cardsToView = response;
      },
      error:(error) => {
        console.log('ViewWishlistPage' + error);
      }
    })
  }

}
