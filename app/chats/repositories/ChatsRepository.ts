import Chats from "../models/Chats";
import { getRepository } from "typeorm";

class ChatsRepository {
  private static instance: ChatsRepository;

  constructor() {}

  static getInstance(): ChatsRepository {
    if (!ChatsRepository.instance) {
        ChatsRepository.instance = new ChatsRepository();
    }
    return ChatsRepository.instance;
  }

  getChats = async (limit: number, page: number): Promise<Array<Chats>> => {
    const chatsRepository = getRepository(Chats);
    return chatsRepository.find();
  };

  createChats = async (newChats: Chats): Promise<Chats> => {
    const chatsRepository = getRepository(Chats);
    const chats = new Chats();
    return chatsRepository.save({
      ...chats,
      ...newChats,
    });
  };
}

export { ChatsRepository };
