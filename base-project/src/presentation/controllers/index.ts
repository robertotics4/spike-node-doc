import { Router } from 'express';
import { CreateCustomerController } from './CreateCustomerController';
import { ListCustomersController } from './ListCustomersController';
import { RemoveCustomerController } from './RemoveCustomerController';

const routes = Router();

// Customers Routes
const createCustomerController = new CreateCustomerController();
const listCustomersController = new ListCustomersController();
const removeCustomerController = new RemoveCustomerController();

routes.post('/customers', createCustomerController.handle);
routes.get('/customers', listCustomersController.handle);
routes.delete('/customers/:id', removeCustomerController.handle);

export default routes;
