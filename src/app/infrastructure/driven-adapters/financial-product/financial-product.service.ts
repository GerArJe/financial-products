import { inject, Injectable } from '@angular/core';
import { FinancialProductGateway } from '../../../domain/financial-product/models/gateway/financial-product.gateway';
import { map, Observable } from 'rxjs';
import { FinancialProduct } from '../../../domain/financial-product/models/financial-product.model';
import { HttpClient } from '@angular/common/http';
import {
  AddOrUpdateFinancialProductResponse,
  DeleteFinancialProductResponse,
  GetFinancialProductsResponse,
} from './models/financial-products-response.model';
import { FinancialProductMapper } from '../../helpers/maps/financial-product.mapper';

@Injectable({
  providedIn: 'root',
})
export class FinancialProductService extends FinancialProductGateway {
  private readonly url = 'http://localhost:3002/bp/products';
  private readonly http = inject(HttpClient);
  private readonly financialProductMapper = new FinancialProductMapper();

  override getAll(): Observable<FinancialProduct[]> {
    return this.http
      .get<GetFinancialProductsResponse>(this.url)
      .pipe(
        map((financialProducts) =>
          financialProducts.data!.map((financialProduct) =>
            this.financialProductMapper.mapFrom(financialProduct)
          )
        )
      );
  }

  override create(
    financialProduct: FinancialProduct
  ): Observable<FinancialProduct> {
    return this.http
      .post<AddOrUpdateFinancialProductResponse>(
        this.url,
        this.financialProductMapper.mapTo(financialProduct)
      )
      .pipe(
        map((response) => this.financialProductMapper.mapFrom(response.data))
      );
  }

  override update(
    financialProduct: FinancialProduct
  ): Observable<FinancialProduct> {
    return this.http
      .put<AddOrUpdateFinancialProductResponse>(
        this.url,
        this.financialProductMapper.mapTo(financialProduct)
      )
      .pipe(
        map((response) => this.financialProductMapper.mapFrom(response.data))
      );
  }

  override delete(id: string): Observable<boolean> {
    return this.http
      .delete<DeleteFinancialProductResponse>(`${this.url}`, {
        params: {
          id,
        },
      })
      .pipe(map(() => true));
  }

  override search(query: string): Observable<FinancialProduct[]> {
    throw new Error('Method not implemented.');
  }
}
