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
    const response = await api.get("/albums");
    return response.data;
  }

  public async getPhotos(): Promise<IPhotos[]> {
    const response = await api.get("/photos");
    return response.data;
  }
}

export default AlbumsService;
