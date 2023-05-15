import {
  ICustomersRepository,
  IListCustomersUseCase,
} from '@/domain/contracts';
import { Customer } from '@/domain/entities';

export class ListCustomersUseCase implements IListCustomersUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  execute(): Customer[] {
    return this.customersRepository.list();
  }
}
