import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { HubController } from "./controllers/hubController";

class HubRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "HubRoutes");
    this.configureRoutes();
  }

  configureRoutes() {
    const hubController = new HubController();

    this.app.get(`/hubs`, [hubController.getHubs]);

    this.app.post(`/hubs`, [
        hubController.createHub
    ]);

    this.app.get(`/hubs/:hubId`, [
        hubController.getHubById
    ]);
    
  }
}

export { HubRoutes };
