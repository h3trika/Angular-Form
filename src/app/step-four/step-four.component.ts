import { Component } from '@angular/core';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent {

  playNow() : void {
     window.location.href='http://www.casino.com/casino-games/';
  }

  promotions() : void {
     window.location.href='http://www.casino.com/promotions/';
  }

}
