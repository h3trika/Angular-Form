import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent {

  stepThreeForm: FormGroup;
  bonusCodeField: boolean = false;
  @Output() isReady: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { 
    this.createForm();

    this.stepThreeForm.valueChanges
        .subscribe( data => this.checkFormValidity( data ) );
  }

  createForm(): void {
    this.stepThreeForm = this.fb.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', [Validators.required, this.checkForNumbers(/[0-9]/)]],
      country: ['', [Validators.required, this.checkForNumbers(/[0-9]/)]],
      postalcode: ['', [Validators.required, this.checkForLetters(/[a-zA-Z]/)]],
      phonenumber: ['', [Validators.required, this.checkForLetters(/[a-zA-Z]/)]],
      bonuscode: ''
    });
  }

  checkForNumbers(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = regex.test(name);
      return !no ? null : {pattern: true }
    };
  }

  checkForLetters(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = regex.test(name);
      return !no ? null : {pattern: true }
    };
  }

  errMsgs: any = {
    address1: [],
    address2: [],
    city: [],
    country: [],
    postalcode: [],
    phonenumber: []
  }

  translations: any = {
    address1: {
      required: 'The main address is required.'
    },
    address2: {
      required: 'The backup address is required.'
    },
    city: {
      required: 'The city is required.',
      pattern: 'There is not a city name with numbers.'
    },
    country: {
      required: 'The country is required.',
      pattern: 'There is not a country name with numbers.'
    },
    postalcode: {
      required: 'The postal code is required.',
      pattern: 'There is not a postal code with letters.'
    },
    phonenumber: {
      required: 'The phone number is required.',
      pattern: 'There is not a phone number with letters.'
    }
  }

  checkFormValidity( data?: any ): void {
    for( let k in this.errMsgs ) {
      this.errMsgs[k] = [];
      if( this.stepThreeForm.controls[k].errors && this.stepThreeForm.controls[k].dirty ) {
        for( let e in this.stepThreeForm.controls[k].errors ) {
          if( this.translations[k][e] ) {
            this.errMsgs[k].push( this.translations[k][e] );
          }
        }
      }
    }
  }

  clearForm(): void {
    this.stepThreeForm.reset()
    this.bonusCodeField = false;  
  }

  continueToStepFour(): void {
    this.isReady.emit(true);
  }
}

