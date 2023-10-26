import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError'
})
export class FormErrorPipe implements PipeTransform {

  transform(value: ValidationErrors, ...args: unknown[]): unknown {

    console.log(value);

    if (!!value) return "";

    const errorMessages: string[] = [];

    if ('required' in value) {
      errorMessages.push("Este campo es invalido");
    }

    return errorMessages.join(". ");
  }

}
