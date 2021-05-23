import { CommonRoutesConfig, configureRoutes } from "../common/common.routes.config";
import { Request, Response, Application } from "express";


class UsersRoutes extends CommonRoutesConfig implements configureRoutes {

    constructor(app: Application){
        super(app, 'UserRoute');
        this.configureRoutes();
    }

    configureRoutes() {
        this.app.get(`/users`, (req: Request, res: Response) => {
            res.status(200).send(`List of users`);
        });

        this.app.post(`/users`, (req: Request, res: Response) => {
            res.status(200).send(`Post users`);
        });

        this.app.put(`/users/:userId`, (req: Request, res: Response) => {
            res.status(200).send(`Put ${req.params.userId}`);
        });

        this.app.patch(`/users/:userId`, (req: Request, res: Response) => {
            res.status(200).send(`Patch to ${req.params.userId}`);
        });

        this.app.delete(`/users/:userId`, (req: Request, res: Response) => {
            res.status(200).send(`Delete to ${req.params.userId}`);
        });

        this.app.get(`/users/:userId`, (req: Request, res: Response) => {
            res.status(200).send(`Get${req.params.userId}`);
        });
    }

}

export { UsersRoutes }