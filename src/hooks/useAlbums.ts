import { AlbumDto } from "@/dto/albumDto";
import { fetchAlbums } from "@/http/content/fetchAlbums";
import { useEffect, useState } from "react";

export function useAlbums() {
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchAlbums() {
    try {
      const albums = await fetchAlbums();
      setAlbums(albums);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    _fetchAlbums();
  }, []);

  return { albums, loading, error };
}
