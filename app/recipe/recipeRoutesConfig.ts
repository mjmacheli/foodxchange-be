import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { RecipeController } from "./controllers/RecipeController";

class RecipeRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "RecipeRoutes");
    this.configureRoutes();
  }

  configureRoutes() {
    const recipeController = new RecipeController();

    this.app.get(`/recipes`, [recipeController.getRecipes]);

    this.app.post(`/recipes`, [recipeController.createRecipe]);

    // this.app.put(`/products/:productId`, [
    //     productController.put]);

    // this.app.patch(`/products/:productId`, [
    //     productController.patch]);

    // this.app.delete(`/products/productId`, [productController.removeProduct]);

    // this.app.get(`/products/productId`, [
    //     productController.getUserById]);
  }
}

export { RecipeRoutes };
