import { contentApiClient } from "../httpClients";

export async function fetchPhoto(photoId: number) {
  try {
    const { data } = await contentApiClient.get(`/photos/${photoId}`);
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
