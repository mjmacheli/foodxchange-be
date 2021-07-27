import { Crud } from "../../common/interfaces/crudInterface";
import { UserRepository } from '../repositories/userRepository';
import { CartRepository } from '../../carts/repositories/Cartrepository'

class UserService implements Crud {

    private static instance: UserService;

    constructor() { }

    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    findAll(limit: number, page: number) {
        return "All Users svc"
    };

    async create(resource: any) {
        const userRepository = UserRepository.getInstance();
        const cartRepository = CartRepository.getInstance();
        const newUser = await userRepository.createUser(resource);

        await cartRepository.createCart({ user: newUser })
        return newUser
    }

    updateById(resourceId: any) {
        return `updating ${resourceId}`;
    }

    findById(resourceId: any) {
        return `Reading.. ${resourceId}`;
    }

    async findByEmail(email: any) {
        const userRepository = UserRepository.getInstance();
        const user = await userRepository.findByEmail(email)
        return user;
    }

    deleteById(resourceId: any) {
        return `Bye ${resourceId}`;
    }

    patchById(resourceId: any) {
        return `patch ${resourceId}`;
    }

}

export { UserService }