import { Request, Response } from "express";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";
import Recipe from "../models/Recipe";

@Route("recipes")
class RecipeController {
  @Get("/")
  async getRecipes(_: Request, res: Response) {
    const recipeRepository = await getRepository(Recipe);
    const recipes = await recipeRepository.find();
    res.status(200).send({ recipes });
  }

  //   getUserById(req: Request, res: Response) {
  //     const productService = ProductService.getInstance();
  //     const product = productService.findById(req.params.userId);
  //     res.status(200).send(product);
  //   }

  async createRecipe(req: Request, res: Response) {
    const recipeRepository = await getRepository(Recipe);
    const recipe = new Recipe();
    console.log("rec ", recipe);
    res.status(201).send(
      recipeRepository.save({
        ...req.body,
        ...recipe,
      })
    );
  }

  //   patch(req: Request, res: Response) {
  //     const productService = ProductService.getInstance();
  //     productService.updateById(req.body);
  //     res.status(2014).send(``);
  //   }

  //   put(req: Request, res: Response) {
  //     const productService = ProductService.getInstance();
  //     productService.updateById(req.body);
  //     res.status(204).send(`okae`);
  //   }

  //   removeProduct(req: Request, res: Response) {
  //     const productService = ProductService.getInstance();
  //     productService.deleteById(req.params.userId);
  //     res.status(204).send(``);
  //   }
}

export { RecipeController };
