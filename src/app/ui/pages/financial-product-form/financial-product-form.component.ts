import { Component, LOCALE_ID } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FinancialProductForm } from '../../utils/models/financial-product-form.model';
import { CommonModule } from '@angular/common';
import { VALIDATION_MESSAGES_FINANCIAL_PRODUCT_FORM } from '../../utils/constants/validation-messages.constants';
import { releaseDateValidator } from '../../utils/helpers/custom-validators';


@Component({
  selector: 'app-financial-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './financial-product-form.component.html',
  styleUrl: './financial-product-form.component.scss',
})
export class FinancialProductFormComponent {
  form = new FormGroup<FinancialProductForm>({
    id: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ],
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    }),
    logo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    releaseDate: new FormControl(new Date(), {
      nonNullable: true,
      validators: [Validators.required, releaseDateValidator()],
    }),
    revisionDate: new FormControl(
      {
        value: this.calculateNextYear(),
        disabled: true,
      },
      {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(this.calculateNextYear().getMilliseconds()),
        ],
      }
    ),
  });
  validationMessages = VALIDATION_MESSAGES_FINANCIAL_PRODUCT_FORM;

  private calculateNextYear(): Date {
    const newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() + 1);
    return newDate;
  }

  onSubmit() {}
}
