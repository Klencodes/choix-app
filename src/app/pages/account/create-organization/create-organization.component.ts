import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/core/services/api-calls/organization.service';
import { utilsService } from 'src/app/core/services/helpers/utils-service.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html'
})
export class CreateOrganizationComponent implements OnInit {

  imageUrl: string;
  orgForm: FormGroup;
  isUploading = false;

  constructor(
    private utilsService: utilsService,
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private router: Router
  ) { }

  ngOnInit() {

    this.orgForm = this.formBuilder.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
    })

  }

  /**
   * Upload product image
   * @param fileBrowser Image File to upload
   */
  uploadImage(fileBrowser) {
    if (fileBrowser.target.files.length > 0) {
      const file: File = fileBrowser.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      this.isUploading = true;
      this.utilsService.uploadImage(formData, (error, result) => {
        console.log(result)
        // this.isUploading = false;
        // if (result !== null) {
        //   this.imageUrl = result.data.image;
        //   this.productData.get('image_url').setValue(result.data.image);
        // }
      });
    }
  }

  onSubmit(data) {
    if (!this.orgForm.valid) {
      this.orgForm.markAllAsTouched()
      return
    } else {
      this.organizationService.createOrganization(data, async (error, result) => {
        if (result !== null && result.response === 'SUCCESSFUL') {
         
        }
      })
    }
  }
}