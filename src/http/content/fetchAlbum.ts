import { contentApiClient } from "../httpClients";

export async function fetchAlbum(albumId: number) {
  try {
    const { data } = await contentApiClient.get(`/albums/${albumId}`);
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
