export const VALIDATION_MESSAGES_FINANCIAL_PRODUCT_FORM = {
  id: [
    { type: 'required', message: 'Requerido' },
    { type: 'minlength', message: 'Minimo 3 caracteres' },
    { type: 'maxlength', message: 'Maximo 10 caracteres' },
  ],
  name: [
    { type: 'required', message: 'Requerido' },
    { type: 'minlength', message: 'Minimo 5 caracteres' },
    { type: 'maxlength', message: 'Maximo 100 caracteres' },
  ],
  description: [
    { type: 'required', message: 'Requerido' },
    { type: 'minlength', message: 'Minimo 10 caracteres' },
    { type: 'maxlength', message: 'Maximo 200 caracteres' },
  ],
  logo: [{ type: 'required', message: 'Requerido' }],
  releaseDate: [
    { type: 'required', message: 'Requerido' },
    { type: 'invalidDate', message: 'Fecha maxima a seleccionar es hoy' },
  ],
  revisionDate: [
    { type: 'required', message: 'Requerido' },
    { type: 'min', message: 'Fecha minima a seleccionar es hoy' },
  ],
};
