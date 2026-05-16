export const INCIDENT_STATUS = [

  'Open',

  'In Progress',

  'Pending',

  'Resolved',

  'Closed'

];

export const STATUS_WORKFLOW = {

  Open: [

    'In Progress',

    'Pending'

  ],

  'In Progress': [

    'Pending',

    'Resolved'

  ],

  Pending: [

    'In Progress',

    'Resolved'

  ],

  Resolved: [

    'Closed'

  ],

  Closed: []

};