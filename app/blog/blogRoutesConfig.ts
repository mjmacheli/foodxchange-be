import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { BlogController } from "./contollers/BlogController";

class BlogRoutes extends CommonRoutesConfig implements configureRoutes {
  constructor(app: Application) {
    super(app, "BlogRoutes");
    this.configureRoutes();
  }

  configureRoutes() {
    const blogController = new BlogController();

    this.app.get(`/blogs`, [blogController.getBlogs]);

    this.app.post(`/blogs`, [blogController.createBlog]);

    this.app.put(`/blogs/:blogId`, [blogController.put]);

    this.app.patch(`/blogs/:blogId`, [blogController.patch]);

    this.app.delete(`/blogs/blogId`, [blogController.removeBlog]);

    this.app.get(`/blogs/blogId`, [blogController.getUserById]);
  }
}

export { BlogRoutes };
