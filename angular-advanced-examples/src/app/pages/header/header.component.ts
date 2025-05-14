import { Component, inject } from '@angular/core';
import { Router, Route } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule, Location } from '@angular/common';
import { SplitByDDotPipe } from '../../pipes/split-by-ddot.pipe';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SplitByDDotPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  availableRoutes: Route[] = routes.filter(route => route.path && (route.component || route.loadComponent));
  activeRoute: string = '';

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
    console.log(routes);
  }

  navigateTo(path: string | undefined): void {
    console.log(path);
    if (path) {
      this.router.navigate([path.split("/:")[0]]).then();
    }
  }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
