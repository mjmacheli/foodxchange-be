import { Request, Response } from "express";
import ProjectUpdate from "../models/Update";
import { ProjectUpdateRepository } from "../repositories/ProjectUpdateRepository";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";

@Route("project-update")
class ProjectUpdateController {
  @Get("/")
    async getUpdates(_: Request, res: Response) {
      const updateRepository = getRepository(ProjectUpdate);
      const updates = await updateRepository.find();
      res.status(200).send({ updates });
    }

    async getProjectUpdates(req: Request, res: Response) {
      const updateRepository = ProjectUpdateRepository.getInstance();
      const updates = await updateRepository.findByFarmProjectId(Number(req.params.id));
      res.status(200).send(updates);
    }

    async addUpdate(req: Request, res: Response) {
      const updateRepository = getRepository(ProjectUpdate);
      const update = new ProjectUpdate();
      res.status(201).send(
        updateRepository.save({
          ...req.body,
          ...update,
        })
      );
    }
}

export { ProjectUpdateController };
