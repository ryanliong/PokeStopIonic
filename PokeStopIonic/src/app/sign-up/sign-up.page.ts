import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MemberService } from '../services/member.service';
import { Member } from '../models/member';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private memberService: MemberService) {
      this.submitted = false;
      this.newMember = new Member();

      this.resultSuccess = false;
      this.resultError = false;
}

  ngOnInit() {
  }

  clear()
  {
    this.submitted = false;
    this.newMember = new Member();
  }

  create(createMemberForm: NgForm) {
    this.submitted = true;

    if (createMemberForm.valid)
    {
      this.memberService.createNewMember(this.newMember).subscribe({
        next:(response)=>{
          let newMemberId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New member " + this.newMember.userName + " created successfully. Proceed to login page.";

          this.newMember = new Member();
          this.submitted = false;
          createMemberForm.reset();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new member: " + error;
        }
      });
    }
  }

  goBackToLoginPage(){
    this.router.navigate(["/login"]);
  }

  changeType() {
    this.type = !this.type;
  }
}
