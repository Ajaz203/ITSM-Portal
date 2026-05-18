import {
  Component,
  effect,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Asset }
from '../../services/asset';

import {
  ASSET_STATUS
} from '../../constants/asset-status';

import {
  ASSET_CATEGORY
} from '../../constants/asset-category';

@Component({
  selector: 'app-edit-asset',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './edit-asset.html',

  styleUrl:
    './edit-asset.scss',
})
export class EditAsset {

  fb =
    inject(FormBuilder);

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

  constructor() {

    effect(() => {

      const asset =

        this.assetService
          .editingAsset();

      if (!asset)
        return;

      this.form.patchValue({

        name:
          asset.name,

        category:
          asset.category,

        vendor:
          asset.vendor,

        assignedTo:
          asset.assignedTo,

        status:
          asset.status,

        purchaseDate:
          asset.purchaseDate,

        warrantyExpiry:
          asset.warrantyExpiry,

        location:
          asset.location

      });

    });

  }

  closeModal() {

    this.assetService
      .showEditModal
      .set(false);

  }

  updateAsset() {

    if (
      this.form.invalid
    ) {

      this.form.markAllAsTouched();

      return;

    }

    const asset =

      this.assetService
        .editingAsset();

    if (!asset)
      return;

    const updated =

      this.assetService
        .assets()
        .map(item => {

          if (
            item.id ===
            asset.id
          ) {

           return {

  ...item,

  name:
    this.form.value.name || '',

  category:
    this.form.value.category || '',

  vendor:
    this.form.value.vendor || '',

  assignedTo:
    this.form.value.assignedTo || '',

  status:
    this.form.value.status as any,

  purchaseDate:
    this.form.value.purchaseDate || '',

  warrantyExpiry:
    this.form.value.warrantyExpiry || '',

  location:
    this.form.value.location || ''

};

          }

          return item;

        });

    this.assetService
      .assets
      .set(updated);

    this.closeModal();

  }

}