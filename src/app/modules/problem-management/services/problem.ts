import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { Problem as ProblemModel }
  from '../interfaces/problem.interface';

@Injectable({
  providedIn: 'root'
})
export class Problem {

  // SEARCH

  search =
    signal('');

  showCreateModal =
    signal(false);
  selectedProblem =
    signal<ProblemModel | null>(
      null
    );
  showEditModal =
    signal(false);
  showDetailsDrawer =
    signal(false);
  showDeleteModal =
    signal(false);
  problems =
    signal<ProblemModel[]>([

      {

        id: 1,

        problemId:
          'PRB001',

        title:
          'Email Server Failure',

        description:
          'Recurring email outage issue',

        priority:
          'High',

        status:
          'Root Cause Analysis',

        rootCause:
          'SMTP overload issue',

        workaround:
          'Restart mail service',

        permanentFix:
          'Server scaling required',

        linkedIncidents: [

          'INC001',

          'INC002'

        ],

        assignedTo:
          'Admin',

        createdAt:
          '2026-05-17'

      }

    ]);

  // FILTERED DATA

  filteredProblems =
    computed(() => {

      const keyword =

        this.search()
          .toLowerCase();

      return this.problems()
        .filter(problem =>

          problem.title
            .toLowerCase()
            .includes(keyword)

        );

    });
  openProblemDetails(
    problem: ProblemModel
  ) {

    this.selectedProblem
      .set(problem);

    this.showDetailsDrawer
      .set(true);

  }
  openEditModal(
    problem: ProblemModel
  ) {

    this.selectedProblem
      .set(problem);

    this.showEditModal
      .set(true);

  }
  openDeleteModal(
  problem: ProblemModel
) {

  this.selectedProblem
    .set(problem);

  this.showDeleteModal
    .set(true);

}
}