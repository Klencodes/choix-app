import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ICallback } from '../../classes/callback.interface';
import { User } from '../../models/user';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // userSubject$ = new BehaviorSubject<any>(null);

  constructor(
      private dataProvider: DataProviderService,
      private constantValues: ConstantValueService,
      private toast: ToastrService
  ) {}

  // public get userValue(): User {
  //   return this.userSubject$.value;
  // }

  /**
  * Create new User
  * @data data to submit to server
  * @callback ICallback back function that returns an error or result
   */
  signup(data, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.SIGNUP_ENDPOINT, data).subscribe(result => {
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }
  /**
  * Verify email 
  * @params params to submit to server
  * @callback ICallback back function that returns an error or result
  */
  verifyEmail(params, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.VERIFY_EMAIL_ENDPOINT, params).subscribe(result => {
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }
  /**
  * Login User with email
  * @data data to submit to server
  * @callback ICallback back function that returns an error or result
  */
  signin(data, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.SIGNIN_ENDPOINT, data).subscribe(result => {   
      const user = result.data
      localStorage.setItem('user', JSON.stringify(user));
      // this.userSubject$.next(user)
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }
  /**
  * Request password reset email 
  * @email email to submit to server
  * @callback ICallback back function that returns an error or result
  */
  requestPasswordReset(email, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.REQUEST_PASSWORD_RESET_ENDPOINT, email).subscribe(result => {
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }
  /**
* create new user password with email
* @data data to submit to server
* @callback ICallback back function that returns an error or result
*/
  createNewPassword(data, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.CREATE_NEW_PASSWORD_ENDPOINT, data).subscribe(result => {
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);     
    })
  }
  /**
  * Logout User
  * @refresh refresh to submit to server
  * @callback ICallback back function that returns an error or result
  */
  logout(refresh, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.LOGOUT_ENDPOINT, refresh).subscribe(result => {
      // this.stopRefreshTokenTimer();
      localStorage.removeItem('user');
      // this.userSubject$.next(null)
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }
  /**
* change user password with email
* @data data to submit to server
* @callback ICallback back function that returns an error or result
*/
  changePassword(user_id, data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CHANGE_PASSWORD_ENDPOINT + user_id + '/', data).subscribe(result => {
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);     
    })
  }
}