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
      const hub = hubRepository.findById(Number(req.params.hubId));
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
}

export { HubController };
