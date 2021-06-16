
import { AbstractControl, ValidatorFn } from '@angular/forms'

export class CustomValidations {

  static requiredIf(status: boolean): ValidatorFn {
    return (control: AbstractControl) => {

      if (status && !control.value.length) {
        return {
          requiredIf: true
        };
      }
      return null;
    }
  }
}
