import { AlbumDto } from "@/dto/albumDto";
import { contentApiClient } from "../httpClients";

export async function fetchAlbum(albumId: number) {
  try {
    const { data } = await contentApiClient.get<AlbumDto>(`/albums/${albumId}`);
    // console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    // console.log(e);
  }
}
