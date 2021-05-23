import { Request, Response } from "express";

class UserController {

    getUsers(req: Request, res: Response) {
        res.status(200).send(`Get to users`);
    }

    getUserById(req: Request, res: Response) {
        res.status(200).send(`Get user ${req.params.userId}`);
    }

    createUser(req: Request, res: Response) {
        res.status(200).send(`Post user ${req.params.userId}`);
    }
    patch(req: Request, res: Response) {
        res.status(200).send(`Patch user ${req.params.userId}`);
    }
    put(req: Request, res: Response) {
        res.status(200).send(`Put user ${req.params.userId}`);
    }
    removeUser(req: Request, res: Response) {
        res.status(200).send(`Delete user ${req.params.userId}`);
    }

}

export { UserController }