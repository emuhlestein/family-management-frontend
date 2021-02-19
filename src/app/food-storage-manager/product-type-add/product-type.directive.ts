import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appProductTypeValidate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ProductTypeDirective,
    multi: true
  }]
})
export class ProductTypeDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.isValueValid(control.value)) {
      return null;
    }
    return { 'fieldIsInvalid': true };
  }

  private isValueValid(value: any): boolean {
    if (!value) return false;
    if (value.length < 1) return false;
    return true;
  }
}
