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
    const response = await api.get("/posts");
    const posts = response.data;
    return posts;
  }

  public async getComments(): Promise<IComment[]> {
    const response = await api.get("/comments");
    const comments = response.data;
    return comments;
  }
}

export default PostsService;
