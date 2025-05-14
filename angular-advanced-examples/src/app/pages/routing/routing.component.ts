import { Component, Input } from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {
  @Input() number?: number = undefined; // it is automaticaly bound to the "number" route parameter;

  constructor(private router: Router) {}

  navigateToRoute(): void {
    // router.navigate is a method of the Router class that allows you to navigate to a specific route in your Angular application.
    // It takes an array of route segments as its first argument, and an optional object as its second argument.
    // The array of route segments represents the path to the route you want to navigate to.
    // The optional object can contain additional options such as query parameters, fragment, and state.
    // for an example, if you want to navigate to the route with the path '/home', you would call router.navigate(['/home']).
    // The navigate method returns a Promise that resolves when the navigation is complete.
    // For an example or the second argument, you can pass an object with query parameters like this:
    // this.router.navigate(['/home'], { queryParams: { id: 1 } });
    // also navigate takes fragment, relativeTo and state as well
    // the fragment is a part of the URL that comes after the # symbol
    // the relativeTo is used to specify the route to navigate relative to
    // the state is used to pass data to the route you are navigating to
    // this.router.navigate(['/home'], { fragment: 'top' });
    // this.router.navigate(['/home'], { relativeTo: this.route });
    // this.router.navigate(['/home'], { state: { id: 1 } });
    // this.router.navigate(['/home'], { queryParams: { id: 1 }, fragment: 'top', relativeTo: this.route, state: { id: 1 } });
    this.router.navigate(['/animation']).then();
  }
  navigateByUrl(): void {
    this.router.navigateByUrl('/control').then();
  }

  navigateWithParams(): void {
    this.number = (this.number || 0) + 1; // Fixed syntax
    this.router.navigate(['/routing', this.number]).then(); // Fixed syntax
  }
}
