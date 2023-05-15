import { CreateCustomerDTO } from '../dtos';
import { Customer } from '../entities';

export interface ICreateCustomerUseCase {
  execute(data: CreateCustomerDTO): Customer;
}
