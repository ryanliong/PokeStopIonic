import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/models/listing';
import { Member } from 'src/app/models/member';
import { ListingService } from 'src/app/services/listing.service';
import { ListingStatus } from 'src/app/models/listing-status';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.page.html',
  styleUrls: ['./edit-listing.page.scss'],
})
export class EditListingPage implements OnInit {

  listingToEdit: Listing;
  memberToEdit: Member;
  listingId: number;
  listingName: String;
  unsoldEnum = "UNSOLD";
  soldEnum = "SOLD";
  blockedEnum = "BLOCKED"

  message: string;
  deleted: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private listingService: ListingService) {
    this.listingToEdit = new Listing();
    this.memberToEdit = new Member();
   }

  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId')); 
    this.deleted = false;
    this.refreshListing();    
  }

  refreshListing() {
    this.listingService.getListingById(this.listingId).subscribe({
      next:(response)=>{
        this.listingToEdit = response;
        this.memberToEdit = this.listingToEdit.memberEntity;
      },
      error:(error)=> {
        console.log('ViewListingPage' + error);
      }
    })

  }

  back()
  {
    this.router.navigate(["/tabs/tab3/my-listings"]);
  }

  markSold(event) {
    this.listingToEdit.listingStatus = ListingStatus.SOLD;
    this.listingService.updateListing(this.listingToEdit).subscribe({
      next:(response)=>{
        this.message = "Listing updated successfully";
      },
      error:(error)=>{
        console.log('********** markSold: ' + error);
      }
    });
  }

  update(event) {
   
  }

  delete(event) {
    this.listingName = this.listingToEdit.listingName;
    this.listingService.deleteListing(this.listingToEdit.listingId).subscribe({
      next:(response)=>{
        this.message = "Listing deleted successfully";
      },
      error:(error)=>{
        console.log('********** delete: ' + error);
      }
    });
    this.deleted = true;
  }

}
