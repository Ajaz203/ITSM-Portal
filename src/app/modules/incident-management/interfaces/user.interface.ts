export interface User {

  /* PROFILE */

  firstName?: string;

  lastName?: string;

  fullName?: string;

  email?: string;

  image?: string;

  /* ACCESS */

  role?: string;

  groupNames?: string[];

  modules?: {

    [key: string]: boolean;

  };

  permissions?: {

    [key: string]: boolean;

  };

  tabs?: {

    [key: string]: boolean;

  };

  /* IDS */

  employeeId?: number;

  organisationId?: number;

  token?: string;

}