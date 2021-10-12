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
      const proj = await projectRepository.findByHubId(Number(req.params.hubId));
      res.status(200).send(proj);
    }

    async getProjectByUserId(req: Request, res: Response) {
      const projectRepository = ProjectRepository.getInstance();
      const proj = await projectRepository.findByUserId(Number(req.params.userId));
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

    async getProjectByFarmId(req: Request, res: Response) {
      const projectRepository = ProjectRepository.getInstance();
      const proj = await projectRepository.findByFarmId(Number(req.params.farmId));

      res.status(200).send(proj);
    }

    async getProjectByProjectId(req: Request, res: Response) {
      const projectRepository = ProjectRepository.getInstance();
      // const userRepository = UserRepository.getInstance();
      const proj = await projectRepository.findByProjectId(Number(req.params.projectId));
      // const farm = await userRepository.findById(proj.)

      res.status(200).send(proj);
    }

    async getUsersInaProject(req: Request, res: Response) {

      const userRepo = ProjectRepository.getInstance();
      const users = await userRepo.findUsersInaProject(Number(req.params.projectId))
      res.status(200).send(users);
    }

}

export { ProjectController };
