import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { Asset as AssetModel }
  from '../interfaces/asset.interface';

@Injectable({
  providedIn: 'root'
})
export class Asset {

  // SEARCH

  search =
    signal('');

  editingAsset =
    signal<AssetModel | null>(
      null
    );

  showEditModal =
    signal(false);
deletingAsset =
  signal<AssetModel | null>(
    null
  );

showDeleteModal =
  signal(false);

  assets =
    signal<AssetModel[]>([

      {

        id: 1,

        assetId: 'AST001',

        name:
          'Dell XPS 15',

        category:
          'Laptop',

        vendor:
          'Dell',

        assignedTo:
          'Ajaz Ahamad',

        status:
          'Active',

        purchaseDate:
          '2025-01-10',

        warrantyExpiry:
          '2028-01-10',

        location:
          'Mumbai Office'

      },

      {

        id: 2,

        assetId: 'AST002',

        name:
          'HP Server ProLiant',

        category:
          'Server',

        vendor:
          'HP',

        assignedTo:
          'Infrastructure Team',

        status:
          'Maintenance',

        purchaseDate:
          '2024-05-15',

        warrantyExpiry:
          '2029-05-15',

        location:
          'Delhi Data Center'

      }

    ]);
  selectedAsset =
    signal<AssetModel | null>(
      null
    );

  showDetailsDrawer =
    signal(false);
  openAssetDetails(
    asset: AssetModel
  ) {

    this.selectedAsset.set(
      asset
    );

    this.showDetailsDrawer.set(
      true
    );

  }

  closeDrawer() {

    this.showDetailsDrawer.set(
      false
    );

  }
  // FILTERED ASSETS

  filteredAssets =
    computed(() => {

      const keyword =

        this.search()
          .toLowerCase();

      return this.assets()
        .filter(asset =>

          asset.name
            .toLowerCase()
            .includes(keyword)

          ||

          asset.assetId
            .toLowerCase()
            .includes(keyword)

          ||

          asset.vendor
            .toLowerCase()
            .includes(keyword)

        );

    });
  openEditModal(
    asset: AssetModel
  ) {

    this.editingAsset.set(
      asset
    );

    this.showEditModal.set(
      true
    );

  }
  openDeleteModal(
  asset: AssetModel
) {

  this.deletingAsset.set(
    asset
  );

  this.showDeleteModal.set(
    true
  );

}
}