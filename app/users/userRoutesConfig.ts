import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import {UserController} from "./controllers/userController";
import { UserMiddleware } from "./middleware/userMiddleware";

class UserRoutes extends CommonRoutesConfig implements configureRoutes {

    constructor(app: Application){
        super(app, 'UserRoutes');
        this.configureRoutes();
    }

    configureRoutes() {

        const userController = new UserController();
        const userMiddleware = UserMiddleware.getInstance();

        this.app.get(`/users`, [userController.getUsers]);

        this.app.post(`/users`, [ 
            // userMiddleware.validateRequiredUserFields, 
            // userMiddleware.validateEmail, 
            userController.createUser]);

        this.app.put(`/users/:userId`, [ 
            userMiddleware.validateUser, 
            userMiddleware.getUserId,
            userController.put]);

        this.app.patch(`/users/:userId`, [
            userMiddleware.validateUser,
            userMiddleware.getUserId,
            userController.patch]);

        this.app.delete(`/users/:userId`, [userController.removeUser]);

        this.app.get(`/users/:userId`, [
            userMiddleware.validateUser,
            userMiddleware.getUserId,
            userController.getUserById]);
    }

}

export { UserRoutes }