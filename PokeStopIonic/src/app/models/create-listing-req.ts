import { Listing } from "./listing";
import { Member } from "./member";



export class CreateListingReq
{
    listingEntity: Listing | undefined;
    memberEntity: Member | undefined;



    constructor(listingEntity?: Listing, memberEntity?: Member)
	{		
		this.listingEntity = listingEntity;
        this.memberEntity = memberEntity;
	}
}
