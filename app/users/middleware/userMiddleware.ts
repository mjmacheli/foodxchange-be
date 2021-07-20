import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/userService";


class UserMiddleware {
    private static instance: UserMiddleware;

    static getInstance(): UserMiddleware {
        if (!UserMiddleware.instance) {
            UserMiddleware.instance = new UserMiddleware();
        }
        return UserMiddleware.instance;
    }

    validateRequiredUserFields(req: Request, res: Response, nxt: NextFunction) {
        if (req.body && req.body.email && req.body.password) {
            nxt();
        } else {
            res.status(400).json({ error: 'Missing information' });
        }
    }

    async validateEmail(req: Request, res: Response, nxt: NextFunction) {
        const userService = UserService.getInstance();
        const user = await userService.findByEmail(req.body.email);

        if (user) {
            res.status(400).json({ error: 'Email/Password already exists' });
        } else {
            nxt();
        }
    }

    async validateUser(req: Request, res: Response, nxt: NextFunction) {
        const userService = UserService.getInstance();
        const user = await userService.findById(req.params.userId);

        if (user) {
            res.status(400).json({ error: 'Email/Password already exists' });
        } else {
            nxt();
        }
    }

    async getUserId(req: Request, _: Response, next: NextFunction) {
        req.body.id = req.params.userId;
        next();
    }
}

export { UserMiddleware }