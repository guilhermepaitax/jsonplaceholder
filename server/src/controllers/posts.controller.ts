import { PrismaClient } from "@prisma/client";

import AppError from "../errors/AppError";
import PostService from "../services/postsService";

class PostsController {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(): Promise<void> {
    try {
      const postsService = new PostService();

      const posts = await postsService.getPosts();
      const comments = await postsService.getComments();

      await this.prisma.post.createMany({
        data: posts,
      });
      console.log("✅ - Posts created.");

      await this.prisma.comment.createMany({
        data: comments,
      });
      console.log("✅ - Comments created.");
    } catch (error) {
      console.log(error);
      throw new AppError("Error on sava posts data.");
    }
  }
}

export default PostsController;
