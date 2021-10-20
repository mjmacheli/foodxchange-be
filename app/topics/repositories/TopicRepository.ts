import Topic from "topic/models/Topic";
import { getRepository } from "typeorm";

class TopicRepository {
  private static instance: TopicRepository;

  constructor() {}

  static getInstance(): TopicRepository {
    if (!TopicRepository.instance) {
      TopicRepository.instance = new TopicRepository();
    }
    return TopicRepository.instance;
  }

  getTopics = async (
    limit: number,
    page: number
  ): Promise<Array<Topic>> => {
    const topicRepository = getRepository(Topic);
    return topicRepository.find();
  };

  createTopic = async (newTopic: Topic): Promise<Topic> => {
    const topicRepository = getRepository(Topic);
    const topic = new Topic();
    return topicRepository.save({
      ...topic,
      ...newTopic,
    });
  };
}

export { TopicRepository };
