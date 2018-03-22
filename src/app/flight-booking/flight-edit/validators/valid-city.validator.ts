import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

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

export function validCityParam (validCities: string[]): ValidatorFn {
  /*return (c: AbstractControl): null | ValidationErrors => {
    console.log(`validCityParam validator with valid cities of ${validCities} works`);
    return null;
  };*/
  return (c: AbstractControl): null | ValidationErrors => {
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        validCity: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }
    return null;
  };
}
