import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FinancialProductGateway } from '../domain/financial-product/models/gateway/financial-product.gateway';
import { FinancialProductService } from '../infrastructure/driven-adapters/financial-product/financial-product.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  financialProductsFeatureKey,
  financialProductsReducer,
} from '../state/reducers/financial-products.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    {
      provide: FinancialProductGateway,
      useClass: FinancialProductService,
    },
    provideStore({ [financialProductsFeatureKey]: financialProductsReducer }),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'Financial Products',
    }),
    { provide: LOCALE_ID, useValue: 'en-ES' },
  ],
};
