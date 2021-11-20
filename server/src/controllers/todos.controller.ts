import { PrismaClient } from "@prisma/client";

import AppError from "../errors/AppError";
import ToDoService from "../services/todosService";

class ToDoController {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(): Promise<void> {
    try {
      const todosService = new ToDoService();

      const toDos = await todosService.getAll();

      await this.prisma.toDo.createMany({
        data: toDos,
      });

      console.log("✅ - ToDos created.");
    } catch (error) {
      console.log(error);
      throw new AppError("Error on sava ToDos data.");
    }
  }
}

export default ToDoController;
