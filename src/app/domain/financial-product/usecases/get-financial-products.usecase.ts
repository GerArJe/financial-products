import { inject, Injectable } from "@angular/core";
import { UseCase } from "../../../base/use-case";
import { FinancialProduct } from "../models/financial-product.model";
import { Observable } from "rxjs";
import { FinancialProductGateway } from "../models/gateway/financial-product.gateway";

@Injectable({
    providedIn: 'root'
  })
  
  export class GetFinancialProductsUseCase implements UseCase<{}, FinancialProduct[]> {
    private readonly financialProductGateway = inject(FinancialProductGateway);
    
    execute(): Observable<FinancialProduct[]> {
        return this.financialProductGateway.getAll();
    }
}