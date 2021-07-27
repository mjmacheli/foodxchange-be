import { ConnectionOptions } from "typeorm";
import User from "../users/models/User";
import Product from "../products/models/Product";
import Cart from "../carts/models/cart";
import Blog from "../blog/models/Blog";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User, Product, Cart, Blog],
  synchronize: true,
};

export default config;
