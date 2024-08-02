import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { FinancialProduct } from '../../domain/financial-product/models/financial-product.model';

export const FinancialProductsActions = createActionGroup({
  source: 'Financial Products',
  events: {
    'Get All': emptyProps(),
    Create: props<FinancialProduct>(),
    Update: props<FinancialProduct>(),
    Delete: props<{ id: string }>(),
    Search:props<{ query: string }>(),
  },
});

export const FinancialProductsApiActions = createActionGroup({
  source: 'Financial Products API',
  events: {
    'Get All Success': props<{ financialProducts: FinancialProduct[] }>(),
    'Get All Failure': emptyProps(),
    'Create Success': props<{ financialProduct: FinancialProduct }>(),
    'Create Failure': props<{ error: any }>(),
    'Update Success': props<{ financialProduct: FinancialProduct }>(),
    'Update Failure': props<{ error: any }>(),
    'Delete Success': props<{ id: string }>(),
    'Delete Failure': props<{ error: any }>(),
  },
});
