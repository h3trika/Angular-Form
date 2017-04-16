import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent {

  stepOneForm: FormGroup;
  @Output() isReady: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { 
    this.createForm();

    this.stepOneForm.valueChanges
        .subscribe( data => this.checkFormValidity( data ) );
  }

  createForm(): void {
    this.stepOneForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      username: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        this.checkForSpecialOrDigit(/((@|!|#|\$|%|\^|&|\*|\(|\)|_|\+|\-|=)|[0-9])/),
        this.checkForCapitalLetter(/[A-Z]/),
        this.checkForLowerCaseLetter(/[a-z]/)
      ]],
      terms: ['', Validators.requiredTrue]
    });
  }

  checkForSpecialOrDigit(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = regex.test(name);
      return no ? null : {specialOrDigit: true }
    };
  }

  checkForCapitalLetter(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = regex.test(name);
      return no ? null : {capital: true }
    };
  }

  checkForLowerCaseLetter(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = regex.test(name);
      return no ? null : {lowercase: true }
    };
  }

  errMsgs: any = {
    email: [],
    firstname: [],
    username: []
  }

  translations: any = {
    email: {
      required: 'The email is required.',
      email: 'This is not a valid email.'
    },
    firstname: {
      required: 'The firstname is required.'
    },
    username: {
      required: 'The username is required.',
      minlength: 'The length must be atleast 6 symbols',
      maxlength: 'The length must not exceed 12 symbols',
      specialOrDigit: 'Username should contain one number OR special character: !@#$%^&*()_+-=',
      capital: 'Username should have one capital letter',
      lowercase: 'Username should have one lower case letter',
    }
  }

  checkFormValidity( data?: any ): void {
    for( let k in this.errMsgs ) {
      this.errMsgs[k] = [];
      if( this.stepOneForm.controls[k].errors && this.stepOneForm.controls[k].dirty ) {
        for( let e in this.stepOneForm.controls[k].errors ) {
          if( this.translations[k][e] ) {
            this.errMsgs[k].push( this.translations[k][e] );
          }
        }
      }
    }
  }

  clearForm(): void {
    this.stepOneForm.reset()
  }

  continueToStepTwo(): void {
    this.isReady.emit(true);
  }

}
