import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {UserOverviewComponent} from './pages/user/user-overview/user-overview.component';
import {UserComponent} from './pages/user/user/user.component';
import {UserDetailComponent} from './pages/user/user-detail/user-detail.component';

// here we define the routes for the application
// the routes are defined in a tree structure
// the purpose of routes is to define the navigation structure of the application
// you can reach the routes by using the routerLink directive or the router.navigate method
// there are different types of routes
// 1. root route: the main route of the application
// 2. child route: a route that is nested inside another route
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: UserOverviewComponent },
      { path: ':id', component: UserDetailComponent }
    ]
  }

];
