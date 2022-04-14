import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/models/listing';
import { Member } from 'src/app/models/member';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.page.html',
  styleUrls: ['./view-listing.page.scss'],
})
export class ViewListingPage implements OnInit {

  listingToView: Listing;
  memberToView: Member;
  listingId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private listingService: ListingService) {
    this.listingToView = new Listing();
    this.memberToView = new Member();
   }

  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));

    this.refreshListing();    
  }

  refreshListing() {
    this.listingService.getListingById(this.listingId).subscribe({
      next:(response)=>{
        this.listingToView = response;
        console.log("console log working!");
        console.log(this.listingToView);
        console.log(this.listingToView.memberEntity);
        this.memberToView = response.memberEntity;
      },
      error:(error)=> {
        console.log('ViewListingPage' + error);
      }
    })

  }

  back()
  {
    this.router.navigate(["/tabs/tab3/trade-search"]);
  }

}
