import UserService from "../../server/src/services/usersService";

describe("UserService test ", () => {
  test("get user", async () => {
    const service = new UserService();
    const result = await service.getUsers();
    expect(result[1].id).toEqual(2);
  });
});

describe("UserService test ", () => {
  test("get user", async () => {
    const service = new UserService();
    const result = await service.getUsers();
    expect(result[1].id).toEqual(2);
  });
});
