import { ConnectionOptions } from "typeorm";
import User from "../users/models/User";
import Product from "../products/models/Product";
import Cart from "../carts/models/cart";
import Blog from "../blog/models/Blog";
import Recipe from "../recipe/models/Recipe";
import Hub from "../hubs/models/Hub";
import Project from "../projects/models/Project";
import FarmProject from "../projects/models/FarmProject";
import ProjectUpdate from "../projectUpdate/models/Update";
import Topic from "../topics/models/Topic";
import Chats from "../chats/models/Chats";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [ Chats],
  synchronize: true,
};

export default config;
