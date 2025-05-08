import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { fakeUsers } from '../mocks/users';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
// this is a service that provides user data
// normaly this would be an http service that fetches data from an api
// but for this example we are using a mock data
// services are singleton classes that are instantiated once and shared across the application
// this is a good place to put business logic and data fetching
export class UserService {

  // Fetch user details by ID
  getUserById(id: number): Observable<User | undefined> {
    return of(fakeUsers).pipe(
      map(users => users.find(user => user.id === id))
    );
  }

  // Mock data for development
  getMockUsers(): Observable<User[]> {
    return of(fakeUsers);
  }
}
