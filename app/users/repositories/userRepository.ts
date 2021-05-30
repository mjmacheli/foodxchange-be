import { getRepository } from "typeorm";
import User from '../models/User';

class UserRepository {

    private static instance: UserRepository;

    constructor() { }

    static getInstance(): UserRepository {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }

    getUsers = async (): Promise<Array<User>> => {
        const userRepository = getRepository(User);
        return userRepository.find();
    };

    createUser = async (newUser: User): Promise<User> => {
        const userRepository = getRepository(User);
        const user = new User();
        return userRepository.save({
            ...user,
            ...newUser,
        });
    };

    getUser = async (id: number): Promise<User | null> => {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ id: id });
        if (!user) return null;
        return user;
    };
}

export { UserRepository }