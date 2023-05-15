import { Router } from 'express';

import { ProductController } from '../controllers';

const routes = Router();

const productController = new ProductController();

routes.post('/products', (req, res) => {
    try {
        const product = productController.create(req.body);

        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Falha no sistema' })
    }
})

routes.get('/products', (req, res) => {
    try {
        const products = productController.list();

        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Falha no sistema' })
    }
})

routes.get('/products/:id', (req, res) => {
    try {
        const { id } = req.params;

        const product = productController.findById(id);

        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Falha no sistema' })
    }
})

routes.delete('/products/:id', (req, res) => {
    try {
        const { id } = req.params;

        productController.remove(id);

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Falha no sistema' })
    }
})

routes.put('/products/:id', (req, res) => {
    try {
        const { id } = req.params;

        const updated = productController.update(id, req.body);

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: 'Falha no sistema' })
    }
})

export default routes;