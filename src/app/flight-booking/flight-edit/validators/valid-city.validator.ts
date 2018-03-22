import {AbstractControl, ValidationErrors} from '@angular/forms';

export function validCity (c: AbstractControl): null | ValidationErrors {
  console.log('validCity validator works')
  return null;
}
