import { Request, Response } from "express";
import ProjectUpdate from "projectUpdate/models/Update";
import { ProjectUpdateRepository } from "projectUpdate/repositories/hubRepository";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";

@Route("project-update")
class HubController {
  @Get("/")
    async getHubs(_: Request, res: Response) {
      const hubRepository = getRepository(ProjectUpdateRepository);
      const hubs = await hubRepository.find();
      res.status(200).send({ hubs });
    }

    async getHubById(req: Request, res: Response) {
      const hubRepository = ProjectUpdateRepository.getInstance();
      // @ts-ignore
      const hub = hubRepository.findById(req.params.hubId);
      res.status(200).send(hub);
    }

    async addUpdate(req: Request, res: Response) {
      const hubRepository = getRepository(ProjectUpdateRepository);
      const hub = new ProjectUpdate();
      res.status(201).send(
          hubRepository.save({
          ...req.body,
          ...hub,
        })
      );
    }
}

export { HubController };
