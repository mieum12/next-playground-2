import { PhotoDto } from "@/dto/photoDto";
import { fetchPhotos } from "@/http/content/fetchPhotos";
import { useEffect, useState } from "react";

export function usePhotos() {
  const [photos, setPhotos] = useState<PhotoDto[]>([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchPhotos() {
    try {
      const photos = await fetchPhotos();
      setPhotos(photos);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoding(false);
    }
  }

  useEffect(() => {
    _fetchPhotos();
  }, []);

  return {};
}
