import { Crud } from "../../common/interfaces/crudInterface";
import { ProductRepository } from "../repositories/ProductRepository";

class ProductService implements Crud {
  private static instance: ProductService;

  constructor() {}

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async findAll(limit: number, page: number) {
    const productRepository = ProductRepository.getInstance();
    const products = await productRepository.getProducts(limit, page);
    return products;
  }

  create(resource: any) {
    const productRepository = ProductRepository.getInstance();
    return productRepository.createProduct(resource);
  }

  updateById(resourceId: any) {
    return `updating ${resourceId}`;
  }

  async findById(resourceId: any) {
    const productRepository = ProductRepository.getInstance();
    const product = await productRepository.findById(resourceId);
    return product;
  }

  deleteById(resourceId: any) {
    return `Bye ${resourceId}`;
  }

  patchById(resourceId: any) {
    return `patch ${resourceId}`;
  }
}

export { ProductService };
