import { Routes } from '@angular/router';
import {AnimationsComponent} from './pages/animations/animations.component';

export const routes: Routes = [
  { path: 'animation', component: AnimationsComponent },
  // here we are using loadComponent to lazy load the component
  // this is a new feature in Angular 14
  // this is a new way to lazy load components
  // lazy loading is a technique to load components only when they are needed
  { path: 'control', loadComponent: () => import('./pages/control-flow/control-flow.component').then(m => m.ControlFlowComponent) },
];
