import { PhotoDto } from "@/dto/photoDto";
import { contentApiClient } from "../httpClients";

export async function fetchPhotos() {
  try {
    const { data } = await contentApiClient.get<PhotoDto[]>("/photos");
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
    throw e;
  }
}
