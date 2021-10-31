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

  async getAvatar(req: Request, res: Response) {
    const chatsRepository = getRepository(Chats);
    const img = await chatsRepository.findOne({ image: req.params.image });
    res.status(200).send(img);
  }

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
