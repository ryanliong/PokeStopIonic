import { Member } from "./member";

export class UpdateMemberReq {
    memberEntity: Member | undefined;

    constructor(memberEntity?: Member) {
        this.memberEntity = memberEntity;
    }
}
