import { getRepository } from "typeorm";
import Product from "../models/Product";

class ProductRepository {
  private static instance: ProductRepository;

  constructor() {}

  static getInstance(): ProductRepository {
    if (!ProductRepository.instance) {
      ProductRepository.instance = new ProductRepository();
    }
    return ProductRepository.instance;
  }

  getProducts = async (
    limit: number,
    page: number
  ): Promise<Array<Product>> => {
    const productRepository = getRepository(Product);
    return productRepository.find();
  };

  createProduct = async (newProduct: Product): Promise<Product> => {
    const productRepository = getRepository(Product);
    const product = new Product();
    return productRepository.save({
      ...product,
      ...newProduct,
    });
  };

  findById = async (id: number): Promise<Product | null> => {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({ id: id });
    if (!product) return null;
    return product;
  };
}

export { ProductRepository };
