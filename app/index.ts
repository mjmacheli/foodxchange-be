import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { createConnection } from "typeorm";

dotenv.config();

import dbConfig from "./config/database";
import swaggerUi from "swagger-ui-express";

import { CommonRoutesConfig } from "./common/routesConfig";
import { UserRoutes } from "./users/userRoutesConfig";
import { ProductRoutes } from "./products/productRoutesConfig";
import { BlogRoutes } from "./blog/blogRoutesConfig";
import { RecipeRoutes } from "./recipe/recipeRoutesConfig";
import { HubRoutes } from "./hubs/hubRoutesConfig";
import { ProjectRoutes } from "./projects/projectRoutesConfig";

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10);
const routes: any = [];
app.use(express.json({ limit: "50mb" }));

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

routes.push(new UserRoutes(app));
routes.push(new ProductRoutes(app));
routes.push(new BlogRoutes(app));
routes.push(new RecipeRoutes(app));
routes.push(new HubRoutes(app));
routes.push(new ProjectRoutes(app));

try {
  createConnection(dbConfig).then(() => {
    app.listen(PORT, (): void => {
      routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes scanned ${route.getName()}`);
      });
    });
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}

export default app;
