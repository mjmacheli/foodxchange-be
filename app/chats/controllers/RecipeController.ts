import Chats from "../models/Chats";
import { Request, Response } from "express";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";

@Route("chats")
class ChatsController {
  @Get("/")
  async getChats(_: Request, res: Response) {
    const chatsRepository = await getRepository(Chats);
    const chats = await chatsRepository.find();
    res.status(200).send({ chats });
  }

  //   getUserById(req: Request, res: Response) {
  //     const productService = ProductService.getInstance();
  //     const product = productService.findById(req.params.userId);
  //     res.status(200).send(product);
  //   }

  async createChats(req: Request, res: Response) {
    const chatsRepository = await getRepository(Chats);
    const chats = new Chats();
    console.log("rec ", chats);
    res.status(201).send(
      chatsRepository.save({
        ...req.body,
        ...chats,
      })
    );
  }
}

export { ChatsController };
