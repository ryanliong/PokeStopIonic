import { Member } from "./member";

export class CreateMemberReq {
    memberEntity: Member | undefined;

    constructor(memberEntity?: Member) {
        this.memberEntity = memberEntity;
    }
}
