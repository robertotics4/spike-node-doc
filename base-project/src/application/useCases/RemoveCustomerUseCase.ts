import {
  ICustomersRepository,
  IRemoveCustomerUseCase,
} from '@/domain/contracts';
import { CustomerNotFoundError } from '@/domain/errors';

export class RemoveCustomerUseCase implements IRemoveCustomerUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  execute(customerId: string): void {
    const result = this.customersRepository.findById(customerId);

    if (!result) {
      throw new CustomerNotFoundError();
    }

    this.customersRepository.remove(customerId);
  }
}
