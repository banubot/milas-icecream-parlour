import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toppings',
  template: `
    <div>
      <img src="../../assets/chocoSauce.png" id="t0" (click)="choose(0)" />
      <img src="../../assets/sprinkles.png" id="t1" (click)="choose(1)" />
      <img src="../../assets/banana.png" id="t2" (click)="choose(2)" />
      <img src="../../assets/caramelSauce.png" id="t3" (click)="choose(3)" />
      <img src="../../assets/whipped.png" id="t4" (click)="choose(4)" />
      <img src="../../assets/cherry.png" id="t5" (click)="choose(5)" />
      <img src="../../assets/oreos.png" id="t6" (click)="choose(6)" />
      <img src="../../assets/strawberries.png" id="t7" (click)="choose(7)" />
      <img src="../../assets/marshmallow.png" id="t8" (click)="choose(8)" />
      <img src="../../assets/cookie.png" id="t9" (click)="choose(9)" />
    </div>
  `,
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent {
  chosen;
  numToppings;
  @Output() emitter = new EventEmitter<number>();
  constructor() { 
    this.chosen = [];
    this.numToppings = 10;
  }

  reset() {
    this.chosen = [];
  }

  choose(val) {
    if (this.chosen.includes(val)) {
      this.chosen.splice(this.chosen.indexOf(val), 1); 
    } else {
      this.chosen.push(val);
    }
    this.emitter.emit(val);
  }

  showAvailible(numAvailable) {
    let i;
    for (i = 0; i < numAvailable; i++) {
      document.getElementById("t" + i).style.visibility = "visible";
    }
    for (i = numAvailable; i < this.numToppings; i++) {
      document.getElementById("t" + i).style.visibility = "hidden";
    }
  }
}
