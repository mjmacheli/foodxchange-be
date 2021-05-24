import { Request, Response } from "express";
import {UserService} from "../services/userService";

class UserController {

    getUsers( _:Request , res: Response) {
        const userService = UserService.getInstance();
        const users = userService.findAll(100, 0);
        res.status(200).send(users);
    }

    getUserById(req: Request, res: Response) {
        const userService = UserService.getInstance();
        const user = userService.findById(req.params.userId);
        res.status(200).send(user);
    }

    createUser(req: Request, res: Response) {
        const userService = UserService.getInstance();
        const user = userService.create(req.body);
        res.status(201).send({ user });
    }

    patch(req: Request, res: Response) {
        const userService = UserService.getInstance();
        userService.updateById(req.body);
        res.status(2014).send(``);
    }

    put(req: Request, res: Response) {
        const userService = UserService.getInstance();
        userService.updateById(req.body);
        res.status(204).send(``);
    }

    removeUser(req: Request, res: Response) {
        const userService = UserService.getInstance();
        userService.deleteById(req.params.userId);
        res.status(204).send(``);
    }

}

export { UserController }