import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, combineLatest, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ListingService } from 'src/app/services/listing.service';
import { Listing } from 'src/app/models/listing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ListingStatus } from 'src/app/models/listing-status';

@Component({
  selector: 'app-trade-search',
  templateUrl: './trade-search.page.html',
  styleUrls: ['./trade-search.page.scss'],
})
export class TradeSearchPage implements OnInit {
  listings: Listing[] | null;
  unsoldEnum = "UNSOLD";

  constructor(private listingService: ListingService, private router: Router) {
    this.listings = new Array();
  }

  ngOnInit() {

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
