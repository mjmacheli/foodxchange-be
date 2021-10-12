import FarmProject from "../models/FarmProject";
import { getRepository } from "typeorm";
import Project from "../models/Project";

class ProjectRepository {

    private static instance: ProjectRepository;

    constructor() { }

    static getInstance(): ProjectRepository {
        if (!ProjectRepository.instance) {
            ProjectRepository.instance = new ProjectRepository();
        }
        return ProjectRepository.instance;
    }

    getProjects = async (): Promise<Array<Project>> => {
        const projectRepository = getRepository(Project);
        return projectRepository.find();
    };

    createProject = async (newProject: Project): Promise<Project> => {
        const projectRepository = getRepository(Project);
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
        const projects = await projectRepository.find({ where: { hubId: id }});
        if (!projects) return [];
        return projects;
    };

    findByUserId = async (id: number): Promise<Array<FarmProject | null>> => {
        const projectRepository = getRepository(FarmProject);
        const projects = await projectRepository.find({ where: { hubId: id }});;
        if (!projects) return [];
        return projects;
    };

    addUserProject = async (newProject: FarmProject): Promise<FarmProject> => {
        const projectRepository = getRepository(FarmProject);
        const project = new FarmProject();
        return projectRepository.save({
            ...project,
            ...newProject,
        });
    };

    findByFarmId = async (id: number): Promise<Array<FarmProject | null>> => {
        const projectRepository = getRepository(FarmProject);
        const projects = await projectRepository.find({ where: { farmId: id }});;
        if (!projects) return [];
        return projects;
    };

    findByProjectId = async (id: number): Promise<Array<FarmProject | null>> => {
        const projectRepository = getRepository(FarmProject);
        const projects = await projectRepository.find({ where: { projectId: id }});;
        if (!projects) return [];
        return projects;
    };
}

export { ProjectRepository }