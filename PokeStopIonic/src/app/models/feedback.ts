import { Listing } from "./listing";

export class Feedback {
  feedbackId: number | undefined;
  feedbackDesc: string | undefined;
  rating: number | undefined;

  listing: Listing | undefined;


  constructor(
    feedbackId?: number , 
    feedbackDesc?: string , 
    rating?: number    
) {
    this.feedbackId = feedbackId
    this.feedbackDesc = feedbackDesc
    this.rating = rating
  }

}
