import { Crud } from "../../common/interfaces/crudInterface";

class UserService implements Crud {

    private static instance: UserService;

    constructor() {}

    static getInstance() : UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    findAll(limit: number, page: number) {
        return "All Users svc"
    };

    create(resource: any){
        return `added ${resource}`;
    }

    updateById(resourceId: any) {
        return `updating ${resourceId}`;
    }

    findById(resourceId: any) {
        return `Reading.. ${resourceId}`;
    }


    findByEmail(resourceId: any) {
        return `Reading.. ${resourceId}`;
    }

    deleteById(resourceId: any) {
        return `Bye ${resourceId}`;
    }

    patchById(resourceId: any){
        return `patch ${resourceId}`;
    }

}

export { UserService }