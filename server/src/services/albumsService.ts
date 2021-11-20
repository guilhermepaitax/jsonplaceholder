import AppError from "../errors/AppError";
import api from "./api";

interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

class AlbumsService {
  public async getAlbums(): Promise<IAlbum[]> {
    try {
      const response = await api.get("/albums");
      return response.data;
    } catch (error) {
      throw new AppError("Error on load albums from api.");
    }
  }

  public async getPhotos(): Promise<IPhotos[]> {
    try {
      const response = await api.get("/photos");
      return response.data;
    } catch (error) {
      throw new AppError("Error on load photos from api.");
    }
  }
}

export default AlbumsService;
