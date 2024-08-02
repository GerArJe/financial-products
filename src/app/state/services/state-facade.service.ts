import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFinancialProducts } from '../reducers/financial-products.reducer';
import { FinancialProductsActions } from '../actions/financial-products.actions';
import { FinancialProduct } from '../../domain/financial-product/models/financial-product.model';

@Injectable({
  providedIn: 'root',
})
export class StateFacadeService {
  private readonly store = inject(Store);
  financialProducts$ = this.store.select(selectFinancialProducts);

  getAllFinancialProducts() {
    this.store.dispatch(FinancialProductsActions.getAll());
  }

  createFinancialProduct(financialProduct: FinancialProduct) {
    this.store.dispatch(FinancialProductsActions.create(financialProduct));
  }

  updateFinancialProduct(financialProduct: FinancialProduct) {
    this.store.dispatch(FinancialProductsActions.update(financialProduct));
  }

  deleteFinancialProduct(id: string) {
    this.store.dispatch(FinancialProductsActions.delete({ id }));
  }

  searchFinancialProducts(query: string) {
    this.store.dispatch(FinancialProductsActions.search({ query }));
  }
}
