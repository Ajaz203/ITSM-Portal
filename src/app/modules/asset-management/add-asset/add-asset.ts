import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router }
from '@angular/router';

import { Asset }
from '../services/asset';

import {
  ASSET_STATUS
} from '../constants/asset-status';

import {
  ASSET_CATEGORY
} from '../constants/asset-category';

@Component({
  selector: 'app-add-asset',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './add-asset.html',

  styleUrl:
    './add-asset.scss',
})
export class AddAsset {

  fb =
    inject(FormBuilder);

  router =
    inject(Router);

  assetService =
    inject(Asset);

  statuses =
    ASSET_STATUS;

  categories =
    ASSET_CATEGORY;

  form = this.fb.group({

    name: [
      '',
      Validators.required
    ],

    category: [
      '',
      Validators.required
    ],

    vendor: [
      '',
      Validators.required
    ],

    assignedTo: [
      '',
      Validators.required
    ],

    status: [
      '',
      Validators.required
    ],

    purchaseDate: [
      '',
      Validators.required
    ],

    warrantyExpiry: [
      '',
      Validators.required
    ],

    location: [
      '',
      Validators.required
    ]

  });

  submit() {

    if (
      this.form.invalid
    ) {

      this.form.markAllAsTouched();

      return;

    }

    const current =

      this.assetService
        .assets();

    this.assetService
      .assets
      .set([

        {

          id:
            current.length + 1,

          assetId:

            'AST00' +

            (
              current.length + 1
            ),

          ...this.form.value

        } as any,

        ...current

      ]);

    this.router.navigate([
      '/assets-management'
    ]);

  }

}