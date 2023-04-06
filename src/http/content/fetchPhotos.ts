import { contentApiClient } from "../httpClients";

export async function fetchPhotos() {
  try {
    const { data } = await contentApiClient.get("/photos");
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
