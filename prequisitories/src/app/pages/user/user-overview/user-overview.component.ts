import { Component } from '@angular/core';
import {fakeUsers} from '../../../mocks/users';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
// the component decorator is used to define the metadata for the component
// selector is the name of the component, it is used to identify the component in the HTML
// imports is used to import other modules and components that are used in this component
// this is tne new way to import modules and components in Angular
// in earlier versions of Angular, we used to import modules and components in the NgModule decorator inside the app.module.ts file or other module files
// templateUrl is the path to the HTML file that contains the template for this component
// styleUrl is the path to the CSS file that contains the styles for this component
@Component({
  selector: 'app-user-overview',
  imports: [
    NgForOf
  ],
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.scss'
})
export class UserOverviewComponent {
  // components are the building blocks of Angular applications and are used to create the user interface.
  // It is a combination of:
  // - a class, which contains the logic for the component
  // - a template, which contains the HTML for the component
  // - styles, which contains the CSS for the component
  // in the class you define the properties and methods that are used in the template
  // The logic in component classes acts as the bridge between the data (model) and the user interface (view), handling interactions and updating the view accordingly.


  // This is a mock data, in a real application you would fetch this data from an API
  // users = fakeUsers

  // this would be the normal way to initialize the users property
  users?: User[] = [];

  constructor(private router: Router, private userService: UserService) {
  }

  // ngOnInit is a lifecycle hook that is called after the component is initialized
  // there are many more lifecycle hooks in Angular, like ngOnChanges, ngOnDestroy, ngAfterViewInit, etc.
  ngOnInit() {
    // You would typically fetch the users from a service which makes an HTTP request
    this.userService.getMockUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  onUserClick(id: number) {
    // this.router calls the navigate method of the Router service
    // the navigate method takes an array of strings as an argument
    // each string in the array is a part of the URL
    // this is one way to navigate to a different route in Angular
    this.router.navigate(['/user', id]).then(r => console.log("navigation change completed", r));
    // the navigate method returns a promise that resolves when the navigation is complete
    // you can use the then method to execute a callback function when the navigation is complete
    // you can also use the catch method to handle errors
    // however it is not necessary to use the then method if you don't need to do anything after the navigation is complete
    // in this case it is used to avoid the warning in the linter
  }
}
