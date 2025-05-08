import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    /**
     * This component demonstrates how to use Angular animations.
     *
     * Animations are defined in the `animations` array of the `@Component` decorator.
     * - A "trigger" is created to control the animation. Here, it's called `activeTrigger`.
     * - The trigger has two "states" (`inactive` and `active`), each with its own styles.
     * - A "transition" defines how the element moves between these states, including duration and easing.
     *
     * In this example:
     * - The `inactive` state sets the element's opacity to 0.5.
     * - The `active` state sets the element's opacity to 1.
     * - The transition between these states takes 300ms and uses an ease-in-out effect.
     *
     * The `state` property in the component controls which animation state is active.
     * - Clicking the element toggles the `state` between `inactive` and `active`.
     * - This triggers the animation to run.
     *
     * The animation is applied in the template using the `[@activeTrigger]` binding.
     */
    trigger('activeTrigger', [
      state('inactive', style({ opacity: 0.5 })),
      state('active', style({ opacity: 1 })),
      transition('inactive <=> active', animate('300ms ease-in-out'))
    ])
  ]
})
export class AnimationsComponent {
  state = 'inactive';

  toggleState() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
}
