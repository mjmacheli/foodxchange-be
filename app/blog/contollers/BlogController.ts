import { Request, Response } from "express";
import { Get, Route } from "tsoa";
import { BlogService } from "../services/BlogService";

@Route("blogs")
class BlogController {
  @Get("/")
  async getBlogs(_: Request, res: Response) {
    const blogService = BlogService.getInstance();
    const blogs = await blogService.findAll(100, 0);
    res.status(200).send(blogs);
  }

  getUserById(req: Request, res: Response) {
    const blogService = BlogService.getInstance();
    const blog = blogService.findById(req.params.userId);
    res.status(200).send(blog);
  }

  async createBlog(req: Request, res: Response) {
    const blogService = BlogService.getInstance();
    const blog = await blogService.create(req.body);
    res.status(201).send({ blog });
  }

  patch(req: Request, res: Response) {
    const blogService = BlogService.getInstance();
    blogService.updateById(req.body);
    res.status(2014).send(``);
  }

  put(req: Request, res: Response) {
    const blogService = BlogService.getInstance();
    blogService.updateById(req.body);
    res.status(204).send(`okae`);
  }

  removeBlog(req: Request, res: Response) {
    const blogService = BlogService.getInstance();
    blogService.deleteById(req.params.userId);
    res.status(204).send(``);
  }
}

export { BlogController };
