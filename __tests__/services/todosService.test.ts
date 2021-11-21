import ToDoService from "../../server/src/services/todosService";

describe("ToDoService test ", () => {
  test("get todos", async () => {
    const service = new ToDoService();
    const result = await service.getAll();
    expect(result[1].id).toEqual(2);
  });
});
