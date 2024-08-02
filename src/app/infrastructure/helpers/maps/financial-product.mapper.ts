import { Mapper } from "../../../base/mapper";
import { FinancialProduct } from "../../../domain/financial-product/models/financial-product.model";
import { FinancialProductEntity } from "../../driven-adapters/financial-product/models/financial-products-response.model";

export class FinancialProductMapper extends Mapper<FinancialProductEntity, FinancialProduct> {
    mapFrom(param: FinancialProductEntity): FinancialProduct {
        return {
            id: param.id,
            name: param.name,
            description: param.description,
            logo: param.logo,
            releaseDate: param.date_release,
            revisionDate: param.date_revision,
        };
    }

    mapTo(param: FinancialProduct): FinancialProductEntity {
        return {
            id: param.id,
            name: param.name,
            description: param.description,
            logo: param.logo,
            date_release: param.releaseDate,
            date_revision: param.releaseDate,
        };
    }
}