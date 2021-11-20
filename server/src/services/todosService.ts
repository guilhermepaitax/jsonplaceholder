import AppError from "../errors/AppError";
import api from "./api";

interface IToDo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

class ToDoService {
  public async getAll(): Promise<IToDo[]> {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      throw new AppError("Error on get todos data.");
    }
  }
}

export default ToDoService;
