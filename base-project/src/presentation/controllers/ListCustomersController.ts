import { ListCustomersUseCase } from '@/application/useCases';
import { CustomersRepository } from '@/infra/repositories';
import { Request, Response } from 'express';

export class ListCustomersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const customersRepository = CustomersRepository.getInstance();
      const listCustomersUseCase = new ListCustomersUseCase(
        customersRepository,
      );

      const customers = listCustomersUseCase.execute();

      return response.status(200).json(customers);
    } catch (err) {
      return response
        .status(400)
        .json({ message: 'Falha interna do sistema.' });
    }
  }
}
