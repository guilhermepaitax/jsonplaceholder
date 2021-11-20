import { PrismaClient } from "@prisma/client";

import AppError from "../errors/AppError";

class CleanDataService {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async cleanData(): Promise<void> {
    try {
      await this.prisma.post.deleteMany();
      await this.prisma.toDo.deleteMany();
      await this.prisma.comment.deleteMany();
      await this.prisma.photo.deleteMany();
      await this.prisma.album.deleteMany();
      await this.prisma.company.deleteMany();
      await this.prisma.address.deleteMany();
      await this.prisma.geo.deleteMany();
      await this.prisma.user.deleteMany();
    } catch (error) {
      throw new AppError("Error on clean data.");
    }
  }
}

export default CleanDataService;
