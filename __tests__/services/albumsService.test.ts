import AlbumsService from "../../server/src/services/albumsService";

describe("AlbumsService test ", () => {
  test("get albums", async () => {
    const service = new AlbumsService();
    const result = await service.getAlbums();
    expect(result[1].id).toEqual(2);
  });
});

describe("AlbumsService test photos ", () => {
  test("get photos", async () => {
    const service = new AlbumsService();
    const result = await service.getPhotos();
    expect(result[1].id).toEqual(2);
  });
});
