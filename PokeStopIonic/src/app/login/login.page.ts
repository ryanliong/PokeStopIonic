import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../services/session.service';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted: boolean;
  username: string;
  password: string;
  loginError: boolean;
  errorMessage: string;
  type: boolean = true;

  constructor(private router: Router,
    public sessionService: SessionService,
    private memberService: MemberService) {
      this.submitted = false;
    }

  ngOnInit()  {
	}

  clear()
  {
		this.username = "";
		this.password = "";
	}

  memberLogin(memberLoginForm: NgForm) {

		this.submitted = true;

		if (memberLoginForm.valid) {
			this.sessionService.setUsername(this.username);
			this.sessionService.setPassword(this.password);

      this.memberService.retrieveMemberId(this.username).subscribe({
        next:(response)=>{
          let memberId: number = response;

          if (memberId != null) {
            this.sessionService.setMemberId(memberId);
            console.log("current Member Id stored: " + memberId);
          }
        }
      });

      this.memberService.memberLogin(this.username, this.password).subscribe({
        next:(response)=>{
          let member: Member = response;

					if (member != null) {
						this.sessionService.setIsLogin(true);
						this.sessionService.setCurrentMember(member);
						this.loginError = false;
            this.navigateToHomePage();
					}
					else
          {
						this.loginError = true;
					}
        },
        error:(error)=>{
          this.loginError = true;
					this.errorMessage = 'Invalid login credential: Username does not exist or invalid password!'
        }
      });
		}
		else
    {
		}
	}

  memberLogout(): void {
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentMember(null);
	}

  navigateToHomePage() {
    this.router.navigate(["/tabs/tab1"])
  }

	back() {
		this.router.navigate(["/login"]);
	}

  changeType() {
    this.type = !this.type;
  }
}
