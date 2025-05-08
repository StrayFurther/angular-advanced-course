import {User, UserRole } from "../models/user";

export const fakeUsers: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    birthDay: new Date(1990, 5, 15),
    userRole: UserRole.ADMIN,
  },
  {
    id: 2,
    name: 'Bob Smith',
    birthDay: new Date(1985, 10, 20),
    userRole: UserRole.USER,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    birthDay: new Date(1995, 2, 8),
    userRole: UserRole.USER,
  },
  {
    id: 4,
    name: 'Diana Prince',
    birthDay: new Date(1988, 7, 25),
    userRole: UserRole.ADMIN,
  },
];
