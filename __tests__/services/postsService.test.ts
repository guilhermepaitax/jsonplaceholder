import PostsService from "../../server/src/services/postsService";

describe("PostsService test ", () => {
  test("get posts", async () => {
    const service = new PostsService();
    const result = await service.getPosts();
    expect(result[1].id).toEqual(2);
  });
});

describe("Comments test ", () => {
  test("get comments", async () => {
    const service = new PostsService();
    const result = await service.getComments();
    expect(result[1].id).toEqual(2);
  });
});
