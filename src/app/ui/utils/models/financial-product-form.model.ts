import { FormControl } from "@angular/forms";

export interface FinancialProductForm {
    id: FormControl<string>;
    name: FormControl<string>;
    description: FormControl<string>;
    logo: FormControl<string>;
    releaseDate: FormControl<Date>;
    revisionDate: FormControl<Date>;
}