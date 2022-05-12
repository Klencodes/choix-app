import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantValueService {
  constructor() { }
  //Core
  get BASE_URL() { return environment.BASE_URL; }
  get APP_NAME() { return 'Choix' }
  get LOCAL_STORAGE_SAVE_ERROR_MESSAGE() { return 'Error occured while processing request' }
  //Dates Formats
  get MM_DD_YYYY_DATE_FORMAT() { return 'MM-DD-YYYY'; }
  get DD_MM_YYYY_DATE_FORMAT() { return 'DD-MM-YYYY'; }

  get CREATE_ORGANIZATION_ENDPOINT() { return 'organization/' }
  get SIGNUP_ENDPOINT() { return 'signup/' }
  get VERIFY_EMAIL_ENDPOINT() { return 'verify_email/' }
  get SIGNIN_ENDPOINT() { return 'signin/' }
  get LOGOUT_ENDPOINT() { return 'logout/' }
  get REQUEST_PASSWORD_RESET_ENDPOINT() { return 'request_password_reset_email/' }
  get CREATE_NEW_PASSWORD_ENDPOINT() { return 'create_new_password/' }
  get CHANGE_PASSWORD_ENDPOINT() { return 'create_new_password/' }

  get UPLOAD_IMAGE_ENDPOINT() { return 'upload_image/' }

}