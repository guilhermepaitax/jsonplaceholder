import { PrismaClient } from "@prisma/client";

import AppError from "../errors/AppError";
import AlbumService from "../services/albumsService";

class AlbumsController {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(): Promise<void> {
    try {
      const albumsService = new AlbumService();

      const albums = await albumsService.getAlbums();
      const photos = await albumsService.getPhotos();

      await this.prisma.album.createMany({
        data: albums,
      });
      console.log("✅ - Albums created.");

      await this.prisma.photo.createMany({
        data: photos,
      });
      console.log("✅ - Photos created.");
    } catch (error) {
      console.log(error);
      throw new AppError("Error on sava posts data.");
    }
  }
}

export default AlbumsController;
