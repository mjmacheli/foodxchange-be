import { getRepository } from "typeorm";
import Hub from '../models/Hub';

class HubRepository {

    private static instance: HubRepository;

    constructor() { }

    static getInstance(): HubRepository {
        if (!HubRepository.instance) {
            HubRepository.instance = new HubRepository();
        }
        return HubRepository.instance;
    }

    getHubs = async (): Promise<Array<Hub>> => {
        const hubRepository = getRepository(Hub);
        return hubRepository.find();
    };

    createHub = async (newHub: Hub): Promise<Hub> => {
        const hubRepository = getRepository(Hub);
        const hub = new Hub();
        return hubRepository.save({
            ...hub,
            ...newHub,
        });
    };

    findById = async (id: number): Promise<Hub | null> => {
        const hubRepository = getRepository(Hub);
        const hub = await hubRepository.findOne({ id: id });
        if (!hub) return null;
        return hub;
    };
}

export { HubRepository }