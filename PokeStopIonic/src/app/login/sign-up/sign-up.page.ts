import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../../services/session.service';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  submitted: boolean;
  newMember: Member;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  type: boolean = true;

  constructor(private router: Router,
    public sessionService: SessionService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute) {
      this.submitted = false;
      this.newMember = new Member();

      this.resultSuccess = false;
      this.resultError = false;
    }

  ngOnInit()  {
	}

  clear()
  {
		this.submitted = false;
    this.newMember = new Member();
	}

  create(createMemberForm: NgForm) {
    this.submitted = true;

    if (createMemberForm.valid) {
      this.memberService.createNewMember(this.newMember).subscribe({
        next:(response)=>{
          let newMemberId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New member " + newMemberId + " created successfully";

          this.newMember = new Member();
          this.submitted = false;
          createMemberForm.reset();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating new Member account: " + error;
        }
      });
    }
  }

  changeType() {
    this.type = !this.type;
  }

  goBackToLoginPage() {
    this.router.navigate(['/login']);
  }
}
