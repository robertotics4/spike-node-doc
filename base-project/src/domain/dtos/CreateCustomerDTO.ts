import { Contact } from '../entities';

export type CreateCustomerDTO = {
  name: string;
  age: number;
  contacts: Contact[];
};
