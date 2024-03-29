import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/api-calls/auth.service';
import { LocalAuthService } from 'src/app/core/services/helpers/local-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private localAuth: LocalAuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    })
  }

  onSubmit(data) {
    console.log(data, 'DATA')
    this.authService.signin(data, (error, result) => {
      // console.log(result, 'LOGIN')
      if (result !== null && result.response === 'SUCCESSFUL') {
        this.localAuth.saveUser(result.results)
        this.router.navigate(['/']);
      } else {
        // get return url from query parameters or default to home page
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth/login';
        this.router.navigateByUrl(returnUrl);
      }

    })

  }

}
