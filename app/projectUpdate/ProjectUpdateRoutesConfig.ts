import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { ProjectUpdateController } from "./controllers/ProjectUpdateController";

class UpdateRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "ProjectUpdateRoute");
    this.configureRoutes();
  }

  configureRoutes() {
    const projectUpdateController = new ProjectUpdateController();

    this.app.get(`/updates`, [projectUpdateController.getUpdates]);

    this.app.post(`/updates`, [
      projectUpdateController.addUpdate
    ]);

    // this.app.get(`/hubs/:hubId`, [
    //   projectUpdateController.getHubById
    // ]);
    
  }
}

export { UpdateRoutes };
