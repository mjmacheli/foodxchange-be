import { ConnectionOptions } from "typeorm";
import User from "../users/models/User";
import Product from "../products/models/Product";
import Cart from "../carts/models/cart";
import Blog from "../blog/models/Blog";
import Recipe from "../recipe/models/Recipe";
import Hub from "hubs/models/Hub";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User, Product, Cart, Blog, Recipe, Hub],
  synchronize: true,
};

export default config;
