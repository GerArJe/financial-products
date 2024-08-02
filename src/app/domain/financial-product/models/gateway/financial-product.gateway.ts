import { Observable } from "rxjs";

import { FinancialProduct } from "../financial-product.model";

export abstract class FinancialProductGateway {
    abstract getAll(): Observable<FinancialProduct[]>;
    abstract create(financialProduct: FinancialProduct): Observable<FinancialProduct>;
    abstract update(financialProduct: FinancialProduct): Observable<FinancialProduct>;
    abstract delete(id: string): Observable<boolean>;
    abstract search(query: string): Observable<FinancialProduct[]>;
}