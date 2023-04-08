import { PhotoDto } from "@/dto/photoDto";
import { fetchPhoto } from "@/http/content/fetchPhoto";
import { useEffect, useState } from "react";

export function usePhotos(photoId: number) {
  const [photo, setPhoto] = useState<PhotoDto | undefined>();
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchPhoto() {
    try {
      const photos = await fetchPhoto(photoId);
      setPhoto(photo);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoding(false);
    }
  }

  useEffect(() => {
    _fetchPhoto();
  }, []);

  return {};
}
