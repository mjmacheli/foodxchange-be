import { Request, Response } from "express";
import { Get, Route } from "tsoa";
import { ProductService } from "../services/ProductServie";

@Route("products")
class ProductController {
  @Get("/")
  async getProducts(_: Request, res: Response) {
    const productService = ProductService.getInstance();
    const products = await productService.findAll(100, 0);
    res.status(200).send(products);
  }

  getUserById(req: Request, res: Response) {
    const productService = ProductService.getInstance();
    const product = productService.findById(req.params.userId);
    res.status(200).send(product);
  }

  async createProduct(req: Request, res: Response) {
    const productService = ProductService.getInstance();
    const product = await productService.create(req.body);
    res.status(201).send({ product });
  }

  patch(req: Request, res: Response) {
    const productService = ProductService.getInstance();
    productService.updateById(req.body);
    res.status(2014).send(``);
  }

  put(req: Request, res: Response) {
    const productService = ProductService.getInstance();
    productService.updateById(req.body);
    res.status(204).send(`okae`);
  }

  removeProduct(req: Request, res: Response) {
    const productService = ProductService.getInstance();
    productService.deleteById(req.params.userId);
    res.status(204).send(``);
  }
}

export { ProductController };
