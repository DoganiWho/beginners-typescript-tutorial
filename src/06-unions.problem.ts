interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  // https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
  role: 'admin' | 'user' | 'super-admin';
}

export const defaultUser: User = {
  id: 1,
  firstName: "Leslie",
  lastName: "Skog",
  role: 'super-admin'
};
