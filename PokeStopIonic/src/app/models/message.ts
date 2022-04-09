export class Message {
  messageId: number | undefined;
  messageTo: number | undefined;
  messageFrom: number | undefined;
  messageTimeStamp: Date | undefined;
  content: string | undefined;


  constructor(
    messageId?: number , 
    messageTo?: number , 
    messageFrom?: number , 
    messageTimeStamp?: Date , 
    content?: string 
) {
    this.messageId = messageId
    this.messageTo = messageTo
    this.messageFrom = messageFrom
    this.messageTimeStamp = messageTimeStamp
    this.content = content
  }

}
