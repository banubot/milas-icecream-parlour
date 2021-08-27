import { Component, OnInit, ViewChild } from '@angular/core';
import { BowlComponent } from '../bowl/bowl.component';
import { OrderComponent } from '../order/order.component';
import { RabbitsComponent } from '../rabbits/rabbits.component';
import { TimerComponent } from '../timer/timer.component';
import { ToppingsComponent } from '../toppings/toppings.component';

@Component({
  selector: 'app-game-controller',
  template: `
    <center>
      <app-order></app-order>
      <app-bowl></app-bowl>
      <h3 id="round"> Round {{ round }} </h3>
      <app-timer></app-timer>
      <button (click)="restart()" id="new">New Game</button>
      <button (click)="submit()" id="submit">Submit</button>
      <app-toppings (emitter)="onSelectTopping($event)"></app-toppings>
      <app-rabbits (emitter)="onSelectRabbit($event)"></app-rabbits>
      <p id="banner"> {{ this.banner }} </p>
      <div id="music">
        <audio autoplay loop controls>
          <source src="assets/Ice-Cream-Banana-rama-jama.mp3" type="audio/mpeg">
        </audio>
        <h6 id="musiclabel">Music by <a href='https://www.youtube.com/channel/UCLRjOVywtrSM9Jgpn_nqCCg' target='_blank'>Haunted Sky</a></h6>
      </div>
    </center>
  `,
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  banner: string;
  @ViewChild(BowlComponent, {}) bowl: BowlComponent;
  @ViewChild(OrderComponent, { static: true }) order: OrderComponent;
  @ViewChild(RabbitsComponent, {}) rabbits: RabbitsComponent;
  @ViewChild(TimerComponent, {}) timer: TimerComponent;
  @ViewChild(ToppingsComponent, {}) toppings: ToppingsComponent;
  timerStart;
  round;

  constructor() {
    this.order = new OrderComponent();
    this.rabbits = new RabbitsComponent();
    this.toppings = new ToppingsComponent();
    this.bowl = new BowlComponent();
    this.timer = new TimerComponent();
    this.timerStart = this.timer.time;
    this.round = 0;
    this.banner = "Complete the order before the clock runs out!";
  }

  ngOnInit() {
    this.nextOrder();
  }

  restart() {
    this.timerStart = 45;
    this.round = 0;
    this.banner = "Complete the order before the clock runs out!";
    document.getElementById("new").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "visible";
    this.order.resetAvailable();
    this.nextOrder();
  }

  onSelectRabbit(index) {
    this.bowl.unhideRabbit(index);
  }

  onSelectTopping(index) {
    this.bowl.unhideTopping(index);
  }

  nextOrder() {
    this.bowl.hideAll();
    this.updateRound();
    this.order.newOrder();
    this.rabbits.reset();
    this.toppings.reset();
    this.toppings.showAvailible(this.order.numToppingsAvailable);
    this.rabbits.showAvailible(this.order.numRabbitsAvailable);
    this.timer.updateTimer(this.timerStart);

  }

  /* get harder over time
   */
  updateRound() {
    this.round++;
    if (this.round % 1 === 0) {
      this.timerStart--;
    }
    if (this.round % 6 === 0) {
      this.order.moreToppings();
    }
    if (this.round % 5 === 0) {
      this.order.moreRabbits();
    }
  }

  submit() {
    this.bowl.hideAll();
    if (this.correct()) {
      this.banner = "Nice!";
      this.nextOrder();
    } else {
      this.banner = "You have angered the rabbits! GAME OVER";
      this.timer.updateTimer(0);
      document.getElementById("new").style.visibility = "visible";
      document.getElementById("submit").style.visibility = "hidden";
    }
  }

  /* must get the order right in time
   */
  correct() {
    var numToppings = this.toppings.chosen.length;
    if (this.timer.time === 0 ||
      this.rabbits.chosen !== this.order.rabbitPicked ||
      numToppings != this.order.numToPick
    ) {
      return false;
    }
    //compare their toppings to order
    let i;
    for (i = 0; i < numToppings; i++) {
      if (!this.order.toppingsPicked.includes(this.toppings.chosen[i])) {
        return false;
      }
    }
    return true;
  }
}
