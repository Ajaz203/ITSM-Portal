import {
  Component,
  inject
} from '@angular/core';
import {RouterModule} from "@angular/router";
import { CommonModule }
from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import { Asset }
from '../services/asset';
import {
  AssetDetailsDrawer
} from '../components/asset-details-drawer/asset-details-drawer';
import { EditAsset } from '../components/edit-asset/edit-asset';
import {
  DeleteAssetModal
} from '../components/delete-asset-modal/delete-asset-modal';
@Component({
  selector: 'app-asset-list',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
  DeleteAssetModal,
    RouterModule,AssetDetailsDrawer,EditAsset,
  ],

  templateUrl:
    './asset-list.html',

  styleUrl:
    './asset-list.scss',
})
export class AssetList {

  assetService =
    inject(Asset);

}