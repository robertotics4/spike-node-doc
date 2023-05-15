import { Customer } from '../entities';

export interface IListCustomersUseCase {
  execute(): Customer[];
}
