import { ArtQueryResult, ArtworkData } from "./types";

export const fetchArtImages = async ({
  pageParam = 1,
}): Promise<ArtQueryResult> => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${pageParam}&limit=20&fields=id,title,image_id`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: ArtworkData = await response.json();

  return {
    images: data.data
      .map((art) => ({
        id: art.id,
        title: art.title,
        imageUrl: art.image_id
          ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
          : null,
      }))
      .filter((img) => img.imageUrl),

    pagination: {
      currentPage: data.pagination.current_page,
      totalPages: data.pagination.total_pages,
    },
  };
};
