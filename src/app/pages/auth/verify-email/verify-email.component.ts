import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailVerifyEnums } from 'src/app/core/enums/enums';
import { AuthService } from 'src/app/core/services/api-calls/auth.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html'
})
export class VerifyEmailComponent implements OnInit {
  isProcessing = false
  token: string;
  email: string;
  emailStatus: string;
  emailVerifyEnums = EmailVerifyEnums;
  emailMsg = 'Account has been verified successfully, click on login to continue';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.token = this.route.snapshot.queryParams['str']
    this.email = this.route.snapshot.queryParams['em']
  }
  ngOnInit(): void {
    // remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    //VERIFY EMAIL METHOD ==> Get token from route and validate the token
    if (this.token !== null && this.token !== undefined && this.email !== null && this.email !== undefined) {
      this.isProcessing = true;
      this.authService.verifyEmail({ email: this.email, email_verification_string: this.token }, (error, result) => {
        this.isProcessing = false;
        if (result !== null && result !== undefined ) {
          this.emailMsg = result.message;
          this.emailStatus = result.response;
        }
      }), error =>{
       
      }
    }

    //VERIFY RESET PASSWORD EMAIL METHOD ==> Get reset_token from route and validate the token
    // if((this.token !== null && this.uidb64 !== null) && (this.token !== undefined && this.uidb64 !== undefined)){
    //   this.isProcessing = true; 
    //   const token = this.reset_token;
    //   const uidb64 = this.uidb64;
    //   this.authService.checkPasswordResetToken(uidb64, token, (error, result) =>{
    //   this.isProcessing = false;
    //     console.log(result, 'RESULT')
    //     this.isProcessing = false;
    //     if(result !== null && result !== undefined){
    //       this.emailStatus = result.status;
    //       if(this.emailStatus !== null && this.emailStatus !== undefined && this.emailStatus === 'SUCCESS' ){
    //         this.router.navigate(['/'], )
    //         this.emailMsg = result.success_msg;
    //           setTimeout(() => {
    //             this.router.navigate(['/auth/create-password'], )
    //           }, 2000);
    //       } 
    //     }
    //   })
    // }
  }
}
