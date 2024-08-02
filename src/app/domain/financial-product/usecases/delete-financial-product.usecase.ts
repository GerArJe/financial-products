import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { FinancialProduct } from "../models/financial-product.model";
import { FinancialProductGateway } from "../models/gateway/financial-product.gateway";

@Injectable({
    providedIn: 'root',
  })
  export class DeleteFinancialProductUseCase
    implements UseCase<string, boolean>
  {
    private readonly financialProductGateway = inject(FinancialProductGateway);
    
    execute(id: string): Observable<boolean> {
      return this.financialProductGateway.delete(id);
    }
  }