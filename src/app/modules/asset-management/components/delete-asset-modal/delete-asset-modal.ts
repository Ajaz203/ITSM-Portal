import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Asset }
from '../../services/asset';

@Component({
  selector:
    'app-delete-asset-modal',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './delete-asset-modal.html',

  styleUrl:
    './delete-asset-modal.scss',
})
export class DeleteAssetModal {

  assetService =
    inject(Asset);

  closeModal() {

    this.assetService
      .showDeleteModal
      .set(false);

  }

  deleteAsset() {

    const asset =

      this.assetService
        .deletingAsset();

    if (!asset)
      return;

    const filtered =

      this.assetService
        .assets()
        .filter(item =>

          item.id !==
          asset.id

        );

    this.assetService
      .assets
      .set(filtered);

    this.closeModal();

  }

}