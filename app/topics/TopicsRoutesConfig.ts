import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { TopicsController } from "./controllers/TopicsController";

class TopicRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "TopicRoutes");
    this.configureRoutes();
  }

  configureRoutes() {
    const topicsController = new TopicsController();

    this.app.get(`/topics`, [topicsController.getTopics]);

    this.app.post(`/topics`, [
        topicsController.createTopics
    ]);

    // this.app.get(`/hubs/:hubId`, [
    //     hubController.getHubById
    // ]);
    
  }
}

export { TopicRoutes };
