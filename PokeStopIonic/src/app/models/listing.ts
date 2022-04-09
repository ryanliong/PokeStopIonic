import { Feedback } from "./feedback";
import { ListingStatus } from "./listing-status";
import { Member } from "./member";
import { Report } from "./report";

export class Listing {
  listingId: number | undefined;
  listingName: string | undefined;
  listingDesc: string | undefined;
  listingPrice: number | undefined;
  listingPic: string | undefined;
  listingStatus: ListingStatus | undefined;

  member: Member | undefined;
  feedback: Feedback | undefined;
  reports: Report[] | undefined;


  constructor(
    listingId?: number , 
    listingName?: string , 
    listingDesc?: string , 
    listingPrice?: number , 
    listingPic?: string , 
    listingStatus?: ListingStatus
) {
    this.listingId = listingId
    this.listingName = listingName
    this.listingDesc = listingDesc
    this.listingPrice = listingPrice
    this.listingPic = listingPic
    this.listingStatus = listingStatus
  }

  
}
