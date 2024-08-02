import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function releaseDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    const invalid = selectedDate.getTime() > currentDate.getTime();

    return invalid ? { invalidDate: { value: control.value } } : null;
  };
}
