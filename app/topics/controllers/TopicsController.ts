import { Request, Response } from "express";
import Topic from "../models/Topic";
import { Get, Route } from "tsoa";
import { getRepository } from "typeorm";

@Route("topics")
class TopicsController {
  @Get("/")
    async getTopics(_: Request, res: Response) {
      const topicsRepository = getRepository(Topic);
      const topics = await topicsRepository.find();
      res.status(200).send({ topics });
    }

    async createTopics(req: Request, res: Response) {
      const topicsRepository = getRepository(Topic);
      const topics = new Topic();
      res.status(201).send(
          topicsRepository.save({
          ...req.body,
          ...topics,
        })
      );
    }
}

export { TopicsController };
