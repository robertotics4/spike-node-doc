import express, { json } from 'express';
// import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../build/swagger.json';
import routes from './routes';

const app = express();

app.use(json());

// RegisterRoutes(app);

app.get('/', (req, res) => {
  res.json({ app: 'test tsoa' })
});

app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
