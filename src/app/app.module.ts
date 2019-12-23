import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { RabbitsComponent } from './rabbits/rabbits.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { OrderComponent } from './order/order.component';
import { BowlComponent } from './bowl/bowl.component';
import { GameControllerComponent } from './game-controller/game-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    RabbitsComponent,
    ToppingsComponent,
    OrderComponent,
    BowlComponent,
    GameControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
