import ProjectUpdate from "projectUpdate/models/Update";
import { getRepository } from "typeorm";

class ProjectUpdateRepository {

    private static instance: ProjectUpdateRepository;

    constructor() { }

    static getInstance(): ProjectUpdateRepository {
        if (!ProjectUpdateRepository.instance) {
            ProjectUpdateRepository.instance = new ProjectUpdateRepository();
        }
        return ProjectUpdateRepository.instance;
    }

    getHubs = async (): Promise<Array<ProjectUpdate>> => {
        const hubRepository = getRepository(ProjectUpdate);
        return hubRepository.find();
    };

    createHub = async (newHub: ProjectUpdate): Promise<ProjectUpdate> => {
        const hubRepository = getRepository(ProjectUpdate);
        const hub = new ProjectUpdate();
        return hubRepository.save({
            ...hub,
            ...newHub,
        });
    };

    findById = async (id: number): Promise<ProjectUpdate | null> => {
        const hubRepository = getRepository(ProjectUpdate);
        const hub = await hubRepository.findOne({ id: id });
        if (!hub) return null;
        return hub;
    };
}

export { ProjectUpdateRepository }