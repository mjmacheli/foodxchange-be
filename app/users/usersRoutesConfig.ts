import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Request, Response, Application } from "express";
import {UserController} from "./controllers/userController";

class UserRoutes extends CommonRoutesConfig implements configureRoutes {

    constructor(app: Application){
        super(app, 'UserRoute');
        this.configureRoutes();
    }

    configureRoutes() {

        const userController = new UserController();

        this.app.get(`/users`, [userController.getUsers]);

        this.app.post(`/users`, [userController.createUser]);

        this.app.put(`/users/:userId`, [userController.put]);

        this.app.patch(`/users/:userId`, [userController.patch]);

        this.app.delete(`/users/:userId`, [userController.removeUser]);

        this.app.get(`/users/:userId`, [userController.getUserById]);
    }

}

export { UserRoutes }