import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/models/listing';
import { Member } from 'src/app/models/member';
import { ListingService } from 'src/app/services/listing.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.page.html',
  styleUrls: ['./add-listing.page.scss'],
})
export class AddListingPage implements OnInit {

  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  listingId: number;
  listingToAdd: Listing;
  memberToAdd: Member;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private listingService: ListingService, private sessionService: SessionService) {
    this.listingToAdd = new Listing();
    this.memberToAdd = new Member();

    this.submitted = false;
    this.resultSuccess = false;
    this.resultError = false;
   }

  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
    if(this.listingId != 0) {
      this.refreshListing();
    }
    this.memberToAdd = this.sessionService.getCurrentMember();
  }

  refreshListing() {
    this.listingService.getListingById(this.listingId).subscribe({
      next:(response)=>{
        this.listingToAdd = response;
      },
      error:(error)=> {
        console.log('Update Listing: ' + error);
      }
    })

  }

  submit(addListingForm: NgForm) {
    if(this.listingId == 0) {
      this.submitted = true;
      this.memberToAdd = this.sessionService.getCurrentMember();
      if(this.listingToAdd.listingPrice == null) {
        this.listingToAdd.listingPrice = 0;
      }
      if (addListingForm.valid)
      {
        this.listingService.createNewListing(this.listingToAdd, this.memberToAdd).subscribe({
          next:(response)=>{
            let newListingId: number = response;
            this.resultSuccess = true;
            this.resultError = false;
            this.message = "New listing " + newListingId + " created successfully";

            this.listingToAdd = new Listing();
            this.submitted = false;
            addListingForm.reset();
          },
          error:(error)=>{
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while creating the new listing: " + error;

            console.log('********** CreateNewListingPage: ' + error);
          }
        });
      }
    } else {
      this.submitted = true;
      if(this.listingToAdd.listingPrice == null) {
        this.listingToAdd.listingPrice = 0;
      }
      if (addListingForm.valid)
      {
        this.listingService.updateListing(this.listingToAdd).subscribe({
          next:(response)=>{
            this.resultSuccess = true;
            this.resultError = false;
            this.message = "Listing " + this.listingToAdd.listingId + " updated successfully";

            this.submitted = false;
          },
          error:(error)=>{
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while updating the listing: " + error;

            console.log('********** Update Listing: ' + error);
          }
        });
      }
    }
  }

  clear()
  {
    this.submitted = false;
    this.listingToAdd = new Listing();
  }

  back()
  {
    this.submitted = false;
    this.listingToAdd = new Listing();
    this.router.navigate(["/tabs/tab3/my-listings"]);
  }

}
