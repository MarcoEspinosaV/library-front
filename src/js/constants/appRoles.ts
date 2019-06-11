export type OptionsRoles = 'ADMIN' | 'PARENT' | 'STAFF' | 'SUPPORT';

export type RolesInterface<K extends string> = {
  [P in K | string]: {
    value: string;
    id: K;
  }
};

export const ROLES: RolesInterface<OptionsRoles> = {
  ADMIN: {
    id: 'ADMIN',
    value: 'Administrador'
  },
  PARENT: {
    id: 'PARENT',
    value: 'Padre'
  },
  STAFF: {
    id: 'STAFF',
    value: 'Staff'
  },
  SUPPORT: {
    id: 'SUPPORT',
    value: 'Soporte'
  }
};
