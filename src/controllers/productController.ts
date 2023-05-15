import { Body, Controller, Delete, Example, Get, Path, Post, Put, Route, SuccessResponse } from 'tsoa';
import { v4 as uuidv4 } from 'uuid';

type Product = {
  /**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 * @pattern [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}
 * @format uuid
 */
  id?: string,
  name: string,
  price: number
}

type CreateProductDTO = {
  name: string,
  price: number
}

const products: Product[] = []

@Route('/products')
export class ProductController extends Controller {
  /**
 * Retorna a lista de produtos
 */
  @Example<Product[]>([
    {
      id: "52907745-7672-470e-a803-a2f8feb52944",
      name: "tsoa product 1",
      price: 10.50,
    },
    {
      id: "22207745-7672-470e-k789-a2f8feb52555",
      name: "tsoa product 2",
      price: 3.79,
    }
  ])
  @Get()
  list(): Product[] {
    return products;
  }

/**
* Cadastra um novo produto
*/
  @Example<Product>({
    id: "52907745-7672-470e-a803-a2f8feb52944",
    name: "tsoa product 1",
    price: 10.50,
  })
  @Post()
  @SuccessResponse("201", "Created")
  create(
    @Body() requestBody: CreateProductDTO
  ): Product {
    const { name, price } = requestBody
    const product: Product = { id: uuidv4(), name, price }

    products.push(product);

    this.setStatus(201);

    return product;
  }

/**
* Busca um produto por id
* @param id Id do produto
* @example id "52907745-7672-470e-a803-a2f8feb52944"
*/
  @Example<Product>({
    id: "52907745-7672-470e-a803-a2f8feb52944",
    name: "tsoa product 1",
    price: 10.50,
  })
  @Get("{id}")
  findById(
    @Path() id: string
  ): Product {
    const result = products.find(product => product.id === id);

    if (!result) {
      this.setStatus(400);
      throw new Error('Produto não encontrado')
    }

    return result;
  }

/**
* Atualiza um produto
* @param id Id do produto
* @example id "52907745-7672-470e-a803-a2f8feb52944"
*/
  @Put("{id}")
  @SuccessResponse("200", "Updated")
  update(
    @Path() id: string,
    @Body() requestBody: CreateProductDTO
  ): Product {
    const { name, price } = requestBody;

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
      this.setStatus(400);
      throw new Error('Produto não encontrado');
    }

    const updatedProduct = { id, name, price };
    products[index] = updatedProduct;

    this.setStatus(200);

    return updatedProduct;
  }

  /**
* Remove um produto
* @param id Id do produto
* @example id "52907745-7672-470e-a803-a2f8feb52944"
*/
  @Delete("{id}")
  @SuccessResponse("204", "No Content")
  remove(
    @Path() id: string
  ): void {
    const index = products.findIndex(product => product.id === id);

    if(index === -1) {
      this.setStatus(400);
      throw new Error('Produto não encontrado');
    }

    products.splice(index, 1);

    this.setStatus(204);
  }
}
