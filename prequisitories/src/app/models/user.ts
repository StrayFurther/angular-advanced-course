// this is an enum
// enums are a special "class" that represents a group of constants (unchangeable variables).
// Enums are a TypeScript feature that allows you to define a set of named constants.
// Enums are a way to give more friendly names to sets of numeric values.
// u could also use strings or types instead of enums, but enums are more readable and easier to use.
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}


// this is an interface
// interfaces are a TypeScript feature that allows you to define the structure of an object.
// An interface is a syntactical contract that an entity should conform to.
// In other words, it defines the properties and methods that an object should have.
// U could also use classes instead of interfaces, but interfaces are more flexible and easier to use.
// also they are a great way to define the shape of an object if you don't need to create instances of it.
// e.g. when getting data from an API or when defining the structure of a component's input properties.
export interface User {
  id: number;
  name: string;
  birthDay: Date;
  userRole: UserRole;
}
