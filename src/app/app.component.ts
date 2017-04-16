import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isStepOneVisible: boolean = true;
  isStepTwoVisible: boolean = false;
  isStepThreeVisible: boolean = false;
  isStepFourVisible: boolean = false;

  stepOneReady(): void {
    this.isStepOneVisible = false;
    this.isStepTwoVisible = true;
  }

  stepTwoReady(): void {
    this.isStepTwoVisible = false;
    this.isStepThreeVisible = true;
  }

  stepThreeReady(): void {
    this.isStepThreeVisible = false;
    this.isStepFourVisible = true;
  }

}
