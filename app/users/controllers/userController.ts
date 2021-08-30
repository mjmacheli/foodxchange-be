import { Request, Response } from "express";
import { baseMail } from "../../mail";
import { Get, Route } from "tsoa";
import { UserService } from "../services/userService";

@Route("users")
class UserController {
  @Get("/")
  getUsers(_: Request, res: Response) {
    const userService = UserService.getInstance();
    const users = userService.findAll(100, 0);
    res.status(200).send(users);
  }

  getUserById(req: Request, res: Response) {
    const userService = UserService.getInstance();
    const user = userService.findById(req.params.userId);
    res.status(200).send(user);
  }

  async auth(req: Request, res: Response) {
    const userService = UserService.getInstance();
    const user = await userService.findByEmail(req.body.email);
    if (user && req.body.password === user.password) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: "Invalid email/password" });
    }
  }

  async createUser(req: Request, res: Response) {
    const userService = UserService.getInstance();
    const user = await userService.create(req.body);
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
    res.status(204).send(`okae`);
  }

  removeUser(req: Request, res: Response) {
    const userService = UserService.getInstance();
    userService.deleteById(req.params.userId);
    res.status(204).send(``);
  }

  sendEmail(req: Request, res: Response) {
    const { from, topic, body } = req.body;
    baseMail(body, topic, from);
    res.status(200).send("sent");
  }
}

export { UserController };
