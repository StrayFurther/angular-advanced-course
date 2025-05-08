import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [
    DatePipe,
    NgIf
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  user?: User;

  // The constructor should only be used for dependency injection and initializing class members.
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  // It is recommended to handle data fetching in the ngOnInit lifecycle hook rather than the constructor.
  // Fetching data in ngOnInit ensures that the component is fully initialized before making API calls.
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    if (!isNaN(id)) {
      // old way, but deprecated in new vesions of angular
      /*
      this.userService.getUserById(id).subscribe(
        (user) => {
          if (user) {
            this.user = user;
          }
        },
        (error) => {
          console.error('Error fetching user', error);
        }
      );
      */
      this.userService.getUserById(id).subscribe({
        next: (user) => {
          if (user) {
            this.user = user;
          }
        },
        error: (error) => {
          console.error('Error fetching user', error);
        },
        complete: () => {
          console.log('User fetch completed');
        }
      });
    }
  }
}
