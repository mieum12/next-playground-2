import { contentApiClient } from "../httpClients";

export async function fetchAlbums() {
  try {
    const { data } = await contentApiClient.get("/albums");
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
