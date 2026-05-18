import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Problem }
from '../../services/problem';

@Component({
  selector:
    'app-problem-details-drawer',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './problem-details-drawer.html',

  styleUrl:
    './problem-details-drawer.scss',
})
export class ProblemDetailsDrawer {

  problemService =
    inject(Problem);

}