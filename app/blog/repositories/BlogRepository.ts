import { getRepository } from "typeorm";
import Blog from "../models/Blog";

class BlogRepository {
  private static instance: BlogRepository;

  constructor() {}

  static getInstance(): BlogRepository {
    if (!BlogRepository.instance) {
      BlogRepository.instance = new BlogRepository();
    }
    return BlogRepository.instance;
  }

  getBlogs = async (limit: number, page: number): Promise<Array<Blog>> => {
    const blogRepository = getRepository(Blog);
    return blogRepository.find();
  };

  createBlog = async (newBlog: Blog): Promise<Blog> => {
    const blogRepository = getRepository(Blog);
    const blog = new Blog();
    return blogRepository.save({
      ...blog,
      ...newBlog,
    });
  };
}

export { BlogRepository };
