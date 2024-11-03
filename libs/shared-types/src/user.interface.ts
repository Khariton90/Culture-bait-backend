export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  passwordHash: string;
  role: string;
  id?: number;
  email?: string;
}
