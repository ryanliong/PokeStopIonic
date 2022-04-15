import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Listing } from 'src/app/models/listing';
import { ListingService } from 'src/app/services/listing.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.page.html',
  styleUrls: ['./my-listings.page.scss'],
})
export class MyListingsPage implements OnInit {
  listings: Listing[] | null;
  unsoldEnum = "UNSOLD";
  soldEnum = "SOLD";
  blockedEnum = "BLOCKED"
  memberId: number | null;

  constructor(private listingService: ListingService, private router: Router, private sessionService: SessionService, private routerActive: ActivatedRoute) {
    this.listings = new Array();
  }

  ngOnInit() {
    this.routerActive.paramMap.subscribe(paramMap => {
      console.log('router active')
      if (this.router.url === "/tabs/tab3/my-listings") {

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
    })  
  }

  editListing(event, listing) {
    this.router.navigate(["/tabs/tab3/editListing/" + listing.listingId]);
  }

  addListing(event, memberId) {
    this.router.navigate(["/tabs/tab3/addListing/" + memberId]);
  }
}
