import { CreateCustomerUseCase } from '@/application/useCases';
import { CustomersRepository } from '@/infra/repositories';
import { Request, Response } from 'express';

export class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, age, contacts } = request.body;

      const customersRepository = CustomersRepository.getInstance();
      const createCustomerUseCase = new CreateCustomerUseCase(
        customersRepository,
      );

      const customer = createCustomerUseCase.execute({ age, name, contacts });

      return response.status(201).json(customer);
    } catch (err) {
      return response
        .status(400)
        .json({ message: 'Falha interna do sistema.' });
    }
  }
}
