export interface GetFinancialProductsResponse {
    data: FinancialProductEntity[];
}

export interface FinancialProductEntity {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: Date;
    date_revision: Date;
}

export interface AddOrUpdateFinancialProductResponse  {
    message: string;
    data: FinancialProductEntity;
}

export interface DeleteFinancialProductResponse {
    message: string;
}
