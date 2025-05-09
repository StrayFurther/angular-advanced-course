import { Component } from '@angular/core';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {mockUsers} from '../../mocks/users';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    FormsModule
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  oldIfElse: boolean = true;
  newIfElse: boolean = true;

  users = mockUsers;
  statusOld: string = 'unknown'; // Default value for statusOld
  statusNew: string = 'unknown'; // Default value for statusNew

  trackById(index: number, user: { id: number }): number {
    return user.id;
  }
}
