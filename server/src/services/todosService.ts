import api from "./api";

interface IToDo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

class ToDoService {
  public async getAll(): Promise<IToDo[]> {
    const response = await api.get("/todos");
    return response.data;
  }
}

export default ToDoService;
