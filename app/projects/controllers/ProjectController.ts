import { Request, Response } from "express";
import Project from "../models/Project";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";
import { ProjectRepository } from "../repositories/projectRepository";
import FarmProject from "../models/FarmProject";

@Route("project")
class ProjectController {
  @Get("/")
    async getProjects(_: Request, res: Response) {
      const projectRepository = getRepository(Project);
        const proj = await projectRepository.find();
        res.status(200).send({ proj });
    }

    async getProjectById(req: Request, res: Response) {
      const projectRepository = ProjectRepository.getInstance();
      // @ts-ignore
      const proj = projectRepository.findById(req.params.projId);
      res.status(200).send(proj);
    }

    async getProjectByHubId(req: Request, res: Response) {
      const projectRepository = ProjectRepository.getInstance();
      // @ts-ignore
      const proj = projectRepository.findByHubId(req.params.hubId);
      res.status(200).send(proj);
    }

    async getProjectByUserId(req: Request, res: Response) {
      const projectRepository = ProjectRepository.getInstance();
      // @ts-ignore
      const proj = projectRepository.findByUserId(req.params.userId);
      res.status(200).send(proj);
    }

    async createProject(req: Request, res: Response) {
      const projectRepository = getRepository(Project);
      const proj = new Project();
      res.status(201).send(
          projectRepository.save({
          ...req.body,
          ...proj,
        })
      );
    }

    async addUserProject(req: Request, res: Response) {
      const projectRepository = getRepository(FarmProject);
      const proj = new FarmProject();
      res.status(201).send(
          projectRepository.save({
          ...req.body,
          ...proj,
        })
      );
    }
}

export { ProjectController };
