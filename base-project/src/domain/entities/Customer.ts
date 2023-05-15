import { v4 as uuidv4 } from 'uuid';
import { Contact } from '@/domain/entities';

export type CustomerProps = {
  id?: string;
  name: string;
  age: number;
  contacts: Contact[];
};

export class Customer {
  id: string;

  name: string;

  age: number;

  contacts: Contact[];

  constructor({ name, age, contacts }: CustomerProps) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.contacts = contacts;
  }
}
