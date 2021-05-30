import { NextFunction, Request, Response } from "express";
import * as argon2 from "argon2";
import { UserService } from "../users/services/userService";

class AuthMiddleware {
    private static instance: AuthMiddleware;

    static getInstance() {
        if (!AuthMiddleware.instance) {
            AuthMiddleware.instance = new AuthMiddleware();
        }
        return AuthMiddleware.instance;
    }

    async validateBody(req: Request, res: Response, nxt: NextFunction) {
        if (req.body && req.body.email && req.body.password) {
            nxt();
        } else {
            res.status(400).json({error: 'email/password missing'})
        }
    }

    async verifyPassword( req: Request, res: Response, nxt: NextFunction){
        const userService = UserService.getInstance();
        const user: any = await userService.findByEmail(req.body.email);

        if (user) {
            let passwordhash = user.password;
            try {
                if (await argon2.verify(passwordhash, req.body.password)) {
                    req.body = {
                        id: user.id,
                        email: user.email,
                        provider: 'email',
                    };
                    return nxt();
                } else {
                    res.status(400).json({ error: `Invalid e-mail and/or password` });
                }
            } catch (err) {
                res.status(400).json({ error: `Invalid e-mail and/or password` });
            }
        }

    }
}

export { AuthMiddleware }