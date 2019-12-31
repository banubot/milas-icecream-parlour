import { Component } from '@angular/core';

@Component({
  selector: 'app-bowl',
  template: `
    <div>
      <img src="assets/cookie.png" id="tb7" />
      <img src="assets/chocolate.png" id="rb0" />
      <img src="assets/vanilla.png" id="rb1" />
      <img src="assets/strawberry.png" id="rb2" />
      <img src="assets/caramel.png" id="rb3" />
      <img src="assets/mint.png" id="rb4" />
      <img src="assets/cookies.png" id="rb5" />
      <img src="assets/neo.png" id="rb6" />
      <img src="assets/blueberry.png" id="rb7" />
      <img src="assets/chocoSauce.png" id="tb0" />
      <img src="assets/caramelSauce.png" id="tb3" />
      <img src="assets/sprinkles.png" id="tb1" />
      <img src="assets/banana.png" id="tb2" />
      <img src="assets/whipped.png" id="tb4" />
      <img src="assets/cherry.png" id="tb5" />
      <img src="assets/strawberries.png" id="tb6" />
      <img src="assets/bowl.png" id="bowl" />
    </div>
  `,
  styleUrls: ['./bowl.component.css']
})
export class BowlComponent {
  numRabbits;
  numToppings;
  constructor() {
    this.numToppings = 8;
    this.numRabbits = 8;
  }

  hideAll() {
    let i;
    for (i = 0; i < this.numToppings; i++) {
      document.getElementById("tb" + i).style.visibility = "hidden";
    }
    this.hideRabbits();
  }

  /* toggle between show topping or nah
   */
  unhideTopping(toppingNum) {
    if (document.getElementById("tb" + toppingNum).style.visibility === "visible") {
      document.getElementById("tb" + toppingNum).style.visibility = "hidden";
    } else {
      document.getElementById("tb" + toppingNum).style.visibility = "visible";
    }
  }

  unhideRabbit(rabbitNum) {
    this.hideRabbits();
    document.getElementById("rb" + rabbitNum).style.visibility = "visible";
  }

  hideRabbits() {
    let i;
    for (i = 0; i < this.numRabbits; i++) {
      document.getElementById("rb" + i).style.visibility = "hidden";
    }
  }

}
