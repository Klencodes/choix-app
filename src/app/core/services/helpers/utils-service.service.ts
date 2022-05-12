import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ConstantValueService } from './constant-values.service';
import { DataProviderService } from './data-provider.service';
import { ICallback } from '../../classes/callback.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class utilsService {

  constructor(
    private decimalPipe: DecimalPipe,
    private constantValues: ConstantValueService,
    private dataProvider: DataProviderService,
    private toast: ToastrService
  ) { }

  transformDecimal(num) {
    return this.decimalPipe.transform(num, '1.2-2');
  }
  /**
   * Remove space(s) from text
   * @param text text to trim
   */
  removeWhitespace(text: string) {
    if (text !== undefined && text !== null && text !== '') { return text.replace(/\s/g, ''); }
    return '';
  }
  /**
 * Replace space(s) from text with underscores
 * @param text text to trim
 */
  replaceWhitespaceWithUnderscore(text: string) {
    if (text !== undefined && text !== null && text !== '') { return text.replace(/\s/g, '_'); }
    return '';
  }
  /**
* Replace space(s) from text with underscores
* @param text text to trim
*/
  replaceUnderscoreWithWhitespace(text: string) {
    if (text !== undefined && text !== null && text !== '') { return text.replace(/_/g, ' '); }
    return '';
  }

  /**
  * Image upload
  * @data data to submit to server
  * @callback ICallback back function that returns an error or result
  */
  uploadImage(data, callback: ICallback) {
    this.dataProvider.postFormData(this.constantValues.UPLOAD_IMAGE_ENDPOINT, data).subscribe(result => {
      callback(null, result)
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }

}