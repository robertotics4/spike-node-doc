import { ICustomersRepository } from '@/domain/contracts';
import { Customer } from '@/domain/entities';

export class CustomersRepository implements ICustomersRepository {
  private static instance: CustomersRepository;

  private readonly customers: Customer[] = [];

  private constructor() {}

  public static getInstance(): CustomersRepository {
    if (!CustomersRepository.instance) {
      CustomersRepository.instance = new CustomersRepository();
    }
    return CustomersRepository.instance;
  }

  save(customer: Customer): Customer {
    this.customers.push(customer);

    return customer;
  }

  list(): Customer[] {
    return this.customers;
  }

  remove(customerId: string): boolean {
    const customerIndex = this.customers.findIndex(
      customer => customer.id === customerId,
    );

    if (customerIndex === -1) {
      return false;
    }

    this.customers.splice(customerIndex, 1);

    return true;
  }

  findById(customerId: string): Customer | undefined {
    return this.customers.find(customer => customer.id === customerId);
  }
}
