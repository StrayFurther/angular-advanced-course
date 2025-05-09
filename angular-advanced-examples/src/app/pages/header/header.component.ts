import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { routes } from '../../app.routes';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  availableRoutes: Route[] = routes.filter(route => route.path && (route.component || route.loadComponent));
  activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
    console.log(routes)
  }

  navigateTo(path: string | undefined): void {
    console.log(path)
    if (path) {
      this.router.navigate([path]).then();
    }
  }
}
