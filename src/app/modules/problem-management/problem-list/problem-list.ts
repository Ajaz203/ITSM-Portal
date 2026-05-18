import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
  from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import { Problem }
  from '../services/problem';
import {
  CreateProblem
} from '../components/create-problem/create-problem';
import {
  ProblemDetailsDrawer
} from '../components/problem-details-drawer/problem-details-drawer';
import {
  EditProblem
} from '../components/edit-problem/edit-problem';

import {
  DeleteProblemModal
} from '../components/delete-problem-modal/delete-problem-modal';

@Component({
  selector: 'app-problem-list',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule, CreateProblem,
    ProblemDetailsDrawer,EditProblem, 
    DeleteProblemModal
  ],

  templateUrl:
    './problem-list.html',

  styleUrl:
    './problem-list.scss',
})
export class ProblemList {

  problemService =
    inject(Problem);

}