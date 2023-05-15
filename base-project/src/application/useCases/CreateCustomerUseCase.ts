import { ICustomersRepository } from '@/domain/contracts';
import { ICreateCustomerUseCase } from '@/domain/contracts/ICreateCustomerUseCase';
import { CreateCustomerDTO } from '@/domain/dtos';
import { Contact, Customer } from '@/domain/entities';

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  execute({ age, name, contacts }: CreateCustomerDTO): Customer {
    const newContacts: Contact[] = contacts.map((contact: Contact) => {
      return new Contact({
        type: contact.type,
        content: contact.content,
      });
    });

    const newCustomer = new Customer({
      name,
      age,
      contacts: newContacts,
    });

    return this.customersRepository.save(newCustomer);
  }
}
