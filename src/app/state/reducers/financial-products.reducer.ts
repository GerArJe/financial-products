import { createFeature, createReducer, on } from '@ngrx/store';
import { FinancialProduct } from '../../domain/financial-product/models/financial-product.model';
import { FinancialProductsActions, FinancialProductsApiActions } from '../actions/financial-products.actions';

export const financialProductsFeatureKey = 'financialProducts';

interface FinancialProductState {
  financialProducts: FinancialProduct[];
  test: boolean;
}

const initialState: FinancialProductState = {
  financialProducts: [],
  test: false,
};

export const financialProductsReducer = createReducer(
  initialState,
  on(
    FinancialProductsApiActions.getAllSuccess,
    (state, { financialProducts }) => ({
      ...state,
      financialProducts,
    })
  )
);

const financialProductsFeature = createFeature({
  name: financialProductsFeatureKey,
  reducer: financialProductsReducer,
});

export const {
  name,
  reducer,
  selectFinancialProductsState,
  selectTest,
  selectFinancialProducts,
} = financialProductsFeature;
