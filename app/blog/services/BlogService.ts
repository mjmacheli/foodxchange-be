import { Crud } from "../../common/interfaces/crudInterface";
import { BlogRepository } from "../repositories/BlogRepository";

class BlogService implements Crud {
  private static instance: BlogService;

  constructor() {}
  // @ts-ignore
  patchById: ((resourceId: any) => string) | undefined;

  static getInstance(): BlogService {
    if (!BlogService.instance) {
      BlogService.instance = new BlogService();
    }
    return BlogService.instance;
  }

  async findAll(limit: number, page: number) {
    const blogRepository = BlogRepository.getInstance();
    const blogs = await blogRepository.getBlogs(limit, page);
    return blogs;
  }

  create(resource: any) {
    const blogRepository = BlogRepository.getInstance();
    return blogRepository.createBlog(resource);
  }

  updateById(resourceId: any) {
    return `updating ${resourceId}`;
  }

  async findById(resourceId: any) {
    // const blogRepository = BlogRepository.getInstance();
    // const blog = await blogRepository.findById(resourceId);
    return null;
  }

  deleteById(resourceId: any) {
    return `Bye ${resourceId}`;
  }
}

export { BlogService };
