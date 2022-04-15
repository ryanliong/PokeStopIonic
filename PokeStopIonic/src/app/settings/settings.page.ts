import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../services/session.service';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  submitted: boolean;
  memberId: number;
  memberToUpdate: Member;
  retrieveMemberError: boolean;
  type: boolean = true;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private sessionService: SessionService) {
      this.submitted = false;
      this.retrieveMemberError = false;

      this.resultSuccess = false;
      this.resultError = false;
    }

  ngOnInit() {
    this.memberId = this.sessionService.getMemberId();
    this.memberToUpdate = this.sessionService.getCurrentMember();
  }

  update(updateMemberForm: NgForm) {
    this.submitted = true;

    if (updateMemberForm.valid) {
      this.memberService.udpateMember(this.memberToUpdate).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Member updated successfully";
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating member " + error;
        }
      });
    }
  }

  back() {
    this.router.navigate(["/tabs"]);
  }

  changeType() {
    this.type = !this.type;
  }

}
