import { Member } from "./member";
import { Message } from "./message";

export class Conversation {
  conversationId: number | undefined;
  messages: Message | undefined;
  member: Member | undefined;


  constructor(conversationId: number) {
    this.conversationId = conversationId
  }

}
