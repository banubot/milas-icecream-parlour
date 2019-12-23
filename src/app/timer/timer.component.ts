import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `<p> {{ time }} </p>`,
  styleUrls: ['./timer.component.css']
})
export class TimerComponent  {
  time;
  
  constructor() {  
    this.time = 30;
    setInterval(() => this.updateTimer(this.time), 1000);
  }

  /* to restart clock give new number 
   * else use this.time
   */
  updateTimer(time) {
    this.time = time - 1;
    if (this.time < 0) this.time = 0;
  }
}
