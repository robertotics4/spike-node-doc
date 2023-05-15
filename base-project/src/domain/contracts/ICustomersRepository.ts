import { Customer } from '../entities';

export interface ICustomersRepository {
  save(customer: Customer): Customer;
  list(): Customer[];
  remove(customerId: string): boolean;
  findById(customerId: string): Customer | undefined;
}
