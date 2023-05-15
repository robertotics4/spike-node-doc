import { RemoveCustomerUseCase } from '@/application/useCases';
import { CustomersRepository } from '@/infra/repositories';
import { Request, Response } from 'express';

export class RemoveCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const customersRepository = CustomersRepository.getInstance();
      const removeCustomerUseCase = new RemoveCustomerUseCase(
        customersRepository,
      );

      removeCustomerUseCase.execute(id);

      return response
        .status(200)
        .json({ message: 'Cliente removido com sucesso.' });
    } catch (err) {
      return response
        .status(400)
        .json({ message: 'Falha interna do sistema.' });
    }
  }
}
