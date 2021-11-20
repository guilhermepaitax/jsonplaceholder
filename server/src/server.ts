import { PrismaClient } from "@prisma/client";

import AlbumController from "./controllers/albums.controller";
import PostsController from "./controllers/posts.controller";
import ToDoController from "./controllers/todos.controller";
import UserController from "./controllers/users.controller";
import CleanDataService from "./services/cleanDataService";

const prisma = new PrismaClient();

async function main() {
  console.log("\x1b[32m", "🚀 Starting...");
  const cleanDataService = new CleanDataService(prisma);

  const userController = new UserController(prisma);
  const postsController = new PostsController(prisma);
  const albumController = new AlbumController(prisma);
  const toDoController = new ToDoController(prisma);

  await cleanDataService.cleanData();
  await userController.execute();

  await Promise.all([
    postsController.execute(),
    albumController.execute(),
    toDoController.execute(),
  ]);

  console.log("Proccess fineshed.");
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Disconnected from Prisma.");
  });
