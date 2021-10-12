import ProjectUpdate from "../models/Update";
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

    getUpdates = async (): Promise<Array<ProjectUpdate>> => {
        const updateRepository = getRepository(ProjectUpdate);
        return updateRepository.find();
    };

    addUpdate = async (newUpdate: ProjectUpdate): Promise<ProjectUpdate> => {
        const updateRepository = getRepository(ProjectUpdate);
        const update = new ProjectUpdate();
        return updateRepository.save({
            ...update,
            ...newUpdate,
        });
    };

    findById = async (id: number): Promise<ProjectUpdate | null> => {
        const updateRepository = getRepository(ProjectUpdate);
        const update = await updateRepository.findOne({ id: id });
        if (!update) return null;
        return update;
    };
}

export { ProjectUpdateRepository }