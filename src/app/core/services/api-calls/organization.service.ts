import { Injectable } from '@angular/core';
import { ICallback } from '../../classes/callback.interface';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(
    private constantValues: ConstantValueService,
    private dataProvider: DataProviderService,
  ) { }

    /**
 * create organization  to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
*/
createOrganization(data, callback: ICallback) {
  this.dataProvider.postData(this.constantValues.CREATE_ORGANIZATION_ENDPOINT, data).subscribe(result => {
    callback(null, result);
  }, error => {
    callback(error, null);
    //   this.notificationService.snackBarErrorMessage(error.message);
  });
}
}
