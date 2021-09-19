import { getRepository } from "typeorm";
import Project from "../models/Project";
import Hub from '../models/Project';

class ProjectRepository {

    private static instance: ProjectRepository;

    constructor() { }

    static getInstance(): ProjectRepository {
        if (!ProjectRepository.instance) {
            ProjectRepository.instance = new ProjectRepository();
        }
        return ProjectRepository.instance;
    }

    getProjects = async (): Promise<Array<Hub>> => {
        const projectRepository = getRepository(Hub);
        return projectRepository.find();
    };

    createProject = async (newProject: Project): Promise<Project> => {
        const projectRepository = getRepository(Hub);
        const project = new Project();
        return projectRepository.save({
            ...project,
            ...newProject,
        });
    };

    findById = async (id: number): Promise<Project | null> => {
        const projectRepository = getRepository(Project);
        const proj = await projectRepository.findOne({ id: id });
        if (!proj) return null;
        return proj;
    };

    findByHubId = async (id: number): Promise<Array<Project | null>> => {
        const projectRepository = getRepository(Project);
        const projects = await projectRepository.find({ where: { hubId: id }});;
        if (!projects) return [];
        return projects;
    };
}

export { ProjectRepository }