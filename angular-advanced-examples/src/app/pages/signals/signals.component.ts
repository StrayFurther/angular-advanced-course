import {Component, computed, NgZone, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  private intervalId: any;
  count = signal(0);
  numberComputedDoubleCountIsCalled = 0;
  numberFunctionGetDoubleSignalIsCalled = 0;
  numberFunctionPorpertyGetDoubleCountIsCalled = 0;
  doubleCount = computed(() => {
    // normally you never should do this,
    // but this is just for testing purposes.
    // introducing side effects in a computed property
    // is not a good practice
    this.numberComputedDoubleCountIsCalled++;
    return this.count() * 2;
  });


  countProperty = 0;
  numberComputedDoubleCountPropertyIsCalled = 0;
  doubleCountComputedByProperty = computed((): number => {
    this.numberComputedDoubleCountPropertyIsCalled++
    return this.countProperty * 2
  });

  constructor(private ngZone: NgZone) {
  }

  // update vs set:
  // - `set` is used to set the value of a signal directly.
  // - `update` is used to update the value of a signal based on its current value.
  //   - `update` takes a function that receives the current value and returns the new value.
  //   - `set` takes the new value directly.
  // why use `update` and not just use the `set` method and the current value of the signal?
  // In summary, update is more expressive and efficient for modifying a signal's value based on its current state. Use set when assigning a completely new value
  //

  increment(): void {
    this.count.update(value => value + 1); // Update the signal's value
  }

  reset(): void {
    this.count.set(0); // Set the signal's value directly
  }

  incrementProperty(): void {
      this.countProperty++;
  }

  incrementPropertyOutsideAngular(): void {
    this.ngZone.runOutsideAngular(() => {
      // setTimeout is used to simulate an asynchronous operation
      // that happens outside of Angular's zone.
      const nativeSetTimeout = (window as any)['__zone_symbol__setTimeout'] || window.setTimeout;
      nativeSetTimeout(() => {
        this.countProperty++; // This change will not trigger Angular's change detection
        console.log('Incremented property outside Angular:', this.countProperty);
      }, 1000);
    });
  }
  incrementSignalOutside(): void {
    this.ngZone.runOutsideAngular(() => {
      const nativeSetTimeout = (window as any)['__zone_symbol__setTimeout'] || window.setTimeout;
      nativeSetTimeout(() => {
        this.count.update(v => v + 1); // This change will trigger Angular's change detection
        console.log('Incremented signal outside Angular:', this.count());
      }, 1000);
    });
  }


  incrementPropertyOutsideIntervall(): void {
    this.ngZone.runOutsideAngular(() => {
      const nativeSetInterval = (window as any)['__zone_symbol__setInterval'] || window.setInterval;
      let timeoutId: any;

      this.intervalId = nativeSetInterval(() => {
        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            this.stopInterval()
            console.log("Interval stopped");
          }, 5000)
        }
        this.incrementProperty(); // Increment the property
        console.log('Incremented property outside Angular (interval):', this.countProperty);

      }, 1000);
    });

  }

  incrementSignalOutsideIntervall(): void {
    this.ngZone.runOutsideAngular(() => {
      const nativeSetInterval = (window as any)['__zone_symbol__setInterval'] || window.setInterval;
      let timeoutId: any;

      this.intervalId = nativeSetInterval(() => {
        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            this.stopInterval()
            console.log("Interval stopped");
          }, 5000)
        }
        this.increment(); // Increment the property
        console.log('Incremented signal outside Angular (interval):', this.count());

      }, 1000);
    });

  }

  stopInterval(): void {
    if (this.intervalId) {
      const nativeClearInterval = (window as any)['__zone_symbol__clearInterval'] || window.clearInterval;
      nativeClearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  getDoubleCount(): number {
    this.numberFunctionGetDoubleSignalIsCalled++;
    return this.count() * 2; // Recalculates every time the template is checked
  }

  getDoubleCountProperty(): number {
    this.numberFunctionPorpertyGetDoubleCountIsCalled++;
    return this.countProperty * 2; // Recalculates every time the template is checked
  }

}
