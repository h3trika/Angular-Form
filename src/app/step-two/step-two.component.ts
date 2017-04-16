import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent {

  @Output() isReady: EventEmitter<boolean> = new EventEmitter<boolean>();

  goToSite(): void {
    window.location.href='http://www.casino.com/';
  }

  continueToStepThree(): void {
    this.isReady.emit(true);
  }
}
