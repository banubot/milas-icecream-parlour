import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <div>
      <h4>Order:</h4>
      <p>
        {{ orderText }}
      </p>
    </div>
  `,
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderText: string;
  numToppingsAvailable;
  numToppingsToPick;
  numRabbitsAvailable;
  rabbitNames;
  toppingNames;
  rabbitPicked;
  toppingsPicked;
  numToPick;
  constructor() { 
    this.toppingNames = ["Chocolate Sauce", "Sprinkles", 
      "Banana", "Caramel Sauce", "Whipped Cream", "Cherry",
      "Strawberries", "Chocolate Chip Cookie"];
    this.rabbitNames = ["Chocolate", "Vanilla", "Strawberry",
      "Caramel", "Mint", "Cookies n' Cream", "Neopolitan", "Blueberry"];
    this.toppingsPicked = [];
    this.rabbitPicked = 0;
    this.numToPick = 0;
    this.resetAvailable();
  }
  
  newOrder() {
    this.pickRabbit();
    this.pickToppings();
    this.setText();
    console.log(this.orderText);
  }

  resetAvailable() {
    this.numToppingsAvailable = 3;
    this.numRabbitsAvailable = 2;
  }

  moreRabbits() {
    this.numRabbitsAvailable++;
    //should only go over if messed up game rules
    if (this.numRabbitsAvailable < this.rabbitNames.size) {
      this.numRabbitsAvailable = this.rabbitNames.size;
    }
  }

  moreToppings() {
    this.numToppingsAvailable++;
    //should only go over if messed up game rules
    if (this.numToppingsAvailable < this.toppingNames.size) {
      this.numToppingsAvailable = this.toppingNames.size;
    }
  }

  pickRabbit() {
    var min = 0; 
    var max = this.numRabbitsAvailable;  
    this.rabbitPicked = 
      Math.floor(Math.random() * (+max - +min)) + +min; 
  }

  /* pick a random number of toppings 
   * then randomly pick that many toppings
   */
  pickToppings() {
    this.toppingsPicked = [];
    var min = 0; 
    var max = this.numToppingsAvailable;  
    this.numToPick =  
      Math.floor(Math.random() * (+max - +min)) + +min; 
    let i;
    for (i = 0; i < this.numToPick; i++) {
      let picked = -1; 
      let unique = false;
      while (!unique) {
        picked = Math.floor(Math.random() * (+max - +min)) + +min; 
        unique = true;
        if (this.toppingsPicked.includes(picked)) {
            unique = false;
        }
      }
      this.toppingsPicked.push(picked); 
    }
  }

  setText() {
    let toppingsStr = "";
    let i;
    for (i = 0; i < this.toppingsPicked.length - 1; i++) {
      toppingsStr += this.toppingNames[this.toppingsPicked[i]] + ", ";
    }
    toppingsStr += this.toppingNames[this.toppingsPicked[i]];
    this.orderText= this.rabbitNames[this.rabbitPicked] 
      + " icecream";
    if (this.numToPick > 0) {
      this.orderText +=  " with " + toppingsStr;  
    }
  }
}
