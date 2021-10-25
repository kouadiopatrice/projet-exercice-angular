import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OutZoneWatchingService {
  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(this.onZoneStable);
    this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
    this.ngZone.onError.subscribe(this.onZoneError);
    this.reviewSetTimeout();
    console.log('onMicrotaskEmpty', ngZone.onMicrotaskEmpty);
    console.log('zone root', ngZone);
  }
  onZoneStable() {
    console.log('We are stable');
  }
  onZoneUnstable() {
    console.log('We are unstable');
  }
  onZoneError(error: { message: any; toString: () => any }) {
    console.error(
      'Error',
      error instanceof Error ? error.message : error.toString()
    );
  }

  reviewSetTimeout() {
    setTimeout(() => {
      console.log('hey ,I am zone !!!');
    }, 200);
  }
}
