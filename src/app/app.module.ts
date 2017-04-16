import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
