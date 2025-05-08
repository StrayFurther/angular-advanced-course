import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import {CommonModule} from '@angular/common';
import { tada } from 'ng-animate'; // Import the animation from ng-animate

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  imports: [CommonModule],
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
     * (Animations can have multiple states, and you can define as many as needed.)
     *
     * The animation is applied in the template using the `[@activeTrigger]` binding.
     *
     * The styles for the `activeTrigger` animation are defined using the `style` function.
     * It is used to set the styles for the `inactive` and `active` states.
     * It is similar to CSS styles, but it is defined in JavaScript.
     *
     * The `trigger` function is used to create a new animation trigger.
     *
     * The `state` function is used to define the styles for each state.
     * It takes two arguments: the name of the state and the styles to apply.
     *
     * The `transition` function is used to define the transition between states.
     * It takes two arguments: the name of the states to transition between and the animation to apply.
     * It can also take a third argument, which is an object that defines the options for the transition.
     * there are also some built-in animations that can be used.
     * For example, the `:enter` animation is triggered when an element is added to the DOM.
     * It is similar to the `fadeIn` animation, but it is defined using the `:enter` trigger.
     * The `fadeIn` animation is triggered when an element is added to the DOM.
     * There are more built-in animations that can be used, such as `:leave`, `:move`, and `:query`.
     *
     */
    // activeTrigger uses a state to control the animation
    // it could also be changed by anything else besides a click
    trigger('activeTrigger', [
      state('inactive', style({ opacity: 0.5 })),
      state('active', style({ opacity: 1 })),
      transition('inactive <=> active', animate('300ms ease-in-out'))
    ]),
    // here you can see the use of the :enter trigger
    // in this case the enterAnimation is used to animate the element when it is added to the DOM
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    // here you can see the use of the ng-animation librabry
    // the animation is imported from the ng-animate library
    // In this case, the `tada` animation is used.
    // The `tada` animation is a predefined animation from the ng-animate library
    trigger('tada', [
      transition('true => false', useAnimation(tada)),
      transition('false => true', useAnimation(tada)),
    ])
  ]
})
export class AnimationsComponent {
  state = 'inactive';
  isVisible = false;
  tadaActiveState = false;

  toggleState() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleTada() {
    this.tadaActiveState = !this.tadaActiveState;
  }
}
