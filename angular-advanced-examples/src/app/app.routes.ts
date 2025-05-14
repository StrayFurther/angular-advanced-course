import { Routes } from '@angular/router';
import {AnimationsComponent} from './pages/animations/animations.component';

// in earlier versions of Angular, we would have needed to import the routes inside the
// app.module.ts file and then use the RouterModule.forRoot(routes) method to register the routes
// but in Angular 14, we can use the new ApplicationConfig API to register the routes
// and the RouterModule automatically
// it used to look like this:
/*File: app.module.ts

import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppModule {}
*/
// now we can just use the provideRouter(routes) method to register the routes
// and the RouterModule automatically in the app.config.ts file
export const routes: Routes = [
  { path: 'animation', component: AnimationsComponent },
  // here we are using loadComponent to lazy load the component
  // this is a new feature in Angular 14
  // this is a new way to lazy load components
  // lazy loading is a technique to load components only when they are needed
  { path: 'control', loadComponent: () => import('./pages/control-flow/control-flow.component').then(m => m.ControlFlowComponent) },
  // if redirecting like this, it makes the parameter invisible....funny how it works
  { path: 'routing/:number', redirectTo: 'routing', pathMatch: 'full' },
  { path: 'routing', loadComponent: () => import('./pages/routing/routing.component').then(m => m.RoutingComponent) },
  { path: 'signals', loadComponent: () => import('./pages/signals/signals.component').then(m => m.SignalsComponent) },
];
