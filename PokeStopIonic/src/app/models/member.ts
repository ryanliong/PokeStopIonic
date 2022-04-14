import { Cart } from "./cart";
import { Collection } from "./collection";
import { Conversation } from "./conversation";
import { Listing } from "./listing";
import { Order } from "./order";
import { Refundrequest } from "./refundrequest";
import { Wishlist } from "./wishlist";

export class Member {
  userId: number | undefined;
  userName: string | undefined;
  password: string | undefined;
  emailAddr: string | undefined;
  profilePic: string | undefined;
  phoneNumber: string | undefined;
  defaultShippingAddress: string | undefined;

  collection: Collection | undefined;
  wishlist: Wishlist | undefined;
  conversations: Conversation[] | undefined;
  listings: Listing[] | undefined;
  cart: Cart | undefined;
  refundRequests: Refundrequest[] | undefined;
  orders: Order[] | undefined;


  constructor(
    userId?: number ,
    userName?: string , 
    password?: string , 
    emailAddr?: string , 
    profilePic?: string , 
    defaultShippingAddress?: string,
    phoneNumber?: string
) {
    this.userId = userId
    this.userName = userName
    this.password = password
    this.emailAddr = emailAddr
    this.profilePic = profilePic
    this.defaultShippingAddress = defaultShippingAddress
    this.phoneNumber = phoneNumber
  }
  
}
