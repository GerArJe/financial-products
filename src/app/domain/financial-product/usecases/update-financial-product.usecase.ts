import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { FinancialProduct } from "../models/financial-product.model";
import { FinancialProductGateway } from "../models/gateway/financial-product.gateway";

@Injectable({
    providedIn: 'root',
  })
  export class UpdateFinancialProductUseCase
    implements UseCase<FinancialProduct, FinancialProduct>
  {
    private readonly financialProductGateway = inject(FinancialProductGateway);
    
    execute(financialProduct: FinancialProduct): Observable<FinancialProduct> {
      return this.financialProductGateway.update(financialProduct);
    }
  }