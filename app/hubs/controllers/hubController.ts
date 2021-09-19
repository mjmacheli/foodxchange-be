import { Request, Response } from "express";
import Hub from "../models/Hub";
import { HubRepository } from "../repositories/hubRepository";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";

@Route("hubs")
class HubController {
  @Get("/")
    async getHubs(_: Request, res: Response) {
        const hubRepository = getRepository(Hub);
        const hubs = await hubRepository.find();
        res.status(200).send({ hubs });
    }

    async getHubById(req: Request, res: Response) {
        const hubRepository = HubRepository.getInstance();
        // @ts-ignore
        const hub = hubRepository.findById(req.params.hubId);
        res.status(200).send(hub);
    }

    async createHub(req: Request, res: Response) {
        const hubRepository = getRepository(Hub);
        const hub = new Hub();
        res.status(201).send(
            hubRepository.save({
            ...req.body,
            ...hub,
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

export { HubController };
