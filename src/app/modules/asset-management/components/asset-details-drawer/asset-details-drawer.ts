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
    'app-asset-details-drawer',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './asset-details-drawer.html',

  styleUrl:
    './asset-details-drawer.scss',
})
export class AssetDetailsDrawer {

  assetService =
    inject(Asset);

}