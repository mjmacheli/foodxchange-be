import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { ChatsController } from "./controllers/ChatsController";

class ChatsRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "ChatsRoutes");
    this.configureRoutes();
  }

  configureRoutes() {
    const chatsController = new ChatsController();

    this.app.get(`/chats`, [chatsController.getChats]);

    this.app.post(`/chats`, [chatsController.createChats]);

    this.app.post(`/chats/:image`, [chatsController.getAvatar]);
  }
}

export { ChatsRoutes };
