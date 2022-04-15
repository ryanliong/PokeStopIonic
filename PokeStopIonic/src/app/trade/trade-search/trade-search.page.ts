import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from 'src/app/services/listing.service';
import { Listing } from 'src/app/models/listing';
import { ListingStatus } from 'src/app/models/listing-status';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-trade-search',
  templateUrl: './trade-search.page.html',
  styleUrls: ['./trade-search.page.scss'],
})
export class TradeSearchPage implements OnInit {
  listings: Listing[] | null;
  unsoldEnum = "UNSOLD";
  memberId: number | null;
  searchQuery: string;

  constructor(private listingService: ListingService, private router: Router, private sessionService: SessionService) {
    this.listings = new Array();
  }

  ngOnInit() {
    this.memberId = this.sessionService.getMemberId();

    this.listingService.getListings().subscribe({
      next:(response) => {
        this.listings = response;
      },
      error:(error)=>{
        console.log('browseComponent.ts: ' + error);
      }
    });
  
  }

  viewListing(event, listing) {
    this.router.navigate(["/tabs/tab3/viewListing/" + listing.listingId]);
  }
}
