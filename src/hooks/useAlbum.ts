import { AlbumDto } from "@/dto/albumDto";
import { fetchAlbum } from "@/http/content/fetchAlbum";
import { useEffect, useState } from "react";

export function useAlbum(albumId: number) {
  const [album, setAlbum] = useState<AlbumDto | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchAlbum() {
    try {
      const album = await fetchAlbum(albumId);
      setAlbum(album);
    } catch (err) {
      const e = err as Error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    _fetchAlbum();
  }, []);

  return { album, loading, error };
}
