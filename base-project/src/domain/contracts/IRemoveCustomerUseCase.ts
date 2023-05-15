export interface IRemoveCustomerUseCase {
  execute(customerId: string): void;
}
