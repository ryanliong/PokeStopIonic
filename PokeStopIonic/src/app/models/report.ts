import { Listing } from "./listing";

export class Report {
  reportId: number | undefined;
  reportDesc: string | undefined;
  listing: Listing | undefined;


  constructor(reportId?: number , reportDesc?: string) {
    this.reportId = reportId
    this.reportDesc = reportDesc
  }

}
