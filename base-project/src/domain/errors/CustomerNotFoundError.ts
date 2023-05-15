import { AppError } from './AppError';

export class CustomerNotFoundError extends AppError {
  constructor() {
    super('Cliente não encontrado', 400);
  }
}
