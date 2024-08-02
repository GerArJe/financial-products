import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetFinancialProductsUseCase } from '../../domain/financial-product/usecases/get-financial-products.usecase';
import {
  FinancialProductsActions,
  FinancialProductsApiActions,
} from '../actions/financial-products.actions';
import { exhaustMap, map, catchError, of } from 'rxjs';

@Injectable()
export class FinancialProductsEffect {
  private readonly actions$ = inject(Actions);
  private readonly getFinancialProductsUseCase = inject(
    GetFinancialProductsUseCase
  );

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FinancialProductsActions.getAll),
      exhaustMap(() =>
        this.getFinancialProductsUseCase.execute().pipe(
          map((financialProducts) =>
            FinancialProductsApiActions.getAllSuccess({ financialProducts })
          ),
          catchError((error) =>
            of(FinancialProductsApiActions.getAllFailure())
          )
        )
      )
    )
  );
}
