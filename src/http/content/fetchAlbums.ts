import { AlbumDto } from "@/dto/albumDto";
import { contentApiClient } from "../httpClients";

export async function fetchAlbums() {
  try {
    const { data } = await contentApiClient.get<AlbumDto>("/albums");
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
