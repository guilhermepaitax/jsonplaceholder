import AppError from "../errors/AppError";
import api from "./api";

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

class PostsService {
  public async getPosts(): Promise<IPost[]> {
    try {
      const response = await api.get("/posts");
      const posts = response.data;
      return posts;
    } catch (error) {
      throw new AppError("Error on load posts from api.");
    }
  }

  public async getComments(): Promise<IComment[]> {
    try {
      const response = await api.get("/comments");
      const comments = response.data;
      return comments;
    } catch (error) {
      throw new AppError("Error on load comments from api.");
    }
  }
}

export default PostsService;
