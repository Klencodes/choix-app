import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'signin', component: LoginComponent, data: { title: 'Sign In' } },
    { path: 'signup', component: RegisterComponent, data: { title: 'Sign Up' } },
    { path: 'forgot-password', component: ForgotPassComponent, data: { title: 'Forgot Password' } },
    { path: 'email-verification', component: VerifyEmailComponent, data: { title: 'Email Verification' } },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
