import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rabbits',
  template: `
    <div>
      <img src="assets/chocolate.png" id="r0" (click)="choose(0)"/>
      <img src="assets/vanilla.png" id="r1" (click)="choose(1)"/>
      <img src="assets/strawberry.png" id="r2" (click)="choose(2)"/>
      <img src="assets/caramel.png" id="r3" (click)="choose(3)"/>
      <img src="assets/mint.png" id="r4" (click)="choose(4)"/>
      <img src="assets/cookies.png" id="r5" (click)="choose(5)"/>
      <img src="assets/neo.png" id="r6" (click)="choose(6)"/>
      <img src="assets/blueberry.png" id="r7" (click)="choose(7)"/>
    </div>
  `,
  styleUrls: ['./rabbits.component.css']
})
export class RabbitsComponent  {
  chosen;
  numRabbits;
  @Output() emitter = new EventEmitter<number>();
  constructor() { 
    this.chosen = -1;
    this.numRabbits = 8;
  }

  reset() {
    this.chosen = -1;
  }

  choose(index) {
    this.chosen = index;
    this.emitter.emit(index);
  }

  showAvailible(numAvailable) {
    if (numAvailable > this.numRabbits) numAvailable = this.numRabbits;
    let i;
    for (i = 0; i < numAvailable; i++) {
      document.getElementById("r" + i).style.visibility = "visible";
    }
    for (i = numAvailable; i < this.numRabbits; i++) {
      document.getElementById("r" + i).style.visibility = "hidden";
    }
  }
}
