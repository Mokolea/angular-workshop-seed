import {AbstractControl, ValidationErrors} from '@angular/forms';

export function validCity (c: AbstractControl): null | ValidationErrors {
  // console.log('validCity validator works');
  const validCities: string[] = ['Zürich', 'Wien'];
  if (c.value && validCities.indexOf(c.value) === -1) {
    return {
      validCity: {
        actualValue: c.value,
        validCities: validCities
      }
    }
  }
  return null;
}
