import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { ProjectController } from "./controllers/ProjectController";

class ProjectRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "ProjectRoutes");
    this.configureRoutes();
  }

  configureRoutes() {
    const projectController = new ProjectController();

    this.app.get(`/projects`, [projectController.getProjects]);

    this.app.post(`/projects`, [
        projectController.createProject
    ]);

    this.app.get(`/projects/:projectId`, [
        projectController.getProjectById
    ]);

    this.app.get(`/projects/hub/:hubId`, [
      projectController.getProjectByHubId
    ]);

    this.app.get(`/projects/farm/:farmId`, [
      projectController.getProjectByFarmId
    ]);

    this.app.post(`/projects/farm`, [
      projectController.addUserProject
  ]);
    
  }
}

export { ProjectRoutes };
