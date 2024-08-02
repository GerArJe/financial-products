import { Routes } from '@angular/router';
import { FinancialProductsComponent } from '../ui/pages/financial-products/financial-products.component';
import { FinancialProductFormComponent } from '../ui/pages/financial-product-form/financial-product-form.component';

export const routes: Routes = [
    {
        path: 'financial-products',
        component: FinancialProductsComponent
    },
    {
        path: 'financial-product-form',
        component: FinancialProductFormComponent
    },
    {
        path: '',
        redirectTo: 'financial-products',
        pathMatch: 'full'
    }
];
