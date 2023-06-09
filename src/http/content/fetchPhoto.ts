import { PhotoDto } from "@/dto/photoDto";
import { contentApiClient } from "../httpClients";

export async function fetchPhoto(photoId: number) {
  try {
    const { data } = await contentApiClient.get<PhotoDto>(`/photos/${photoId}`);
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
