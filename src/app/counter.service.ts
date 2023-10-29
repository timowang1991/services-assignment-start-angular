import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  toActiveCounter = 0;
  toInactiveCounter = 0;

  constructor() { }

  incrementInactive() {
    this.toInactiveCounter++;
  }

  incrementActive() {
    this.toActiveCounter++;
  }
}
