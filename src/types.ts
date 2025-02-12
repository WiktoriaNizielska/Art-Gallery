export interface ArtworkData {
  data: {
    id: number;
    title: string;
    image_id: string;
  }[];
  pagination: {
    current_page: number;
    total_pages: number;
  };
}

export interface ProcessedArt {
  id: number;
  title: string;
  imageUrl: string | null;
}

export interface ArtQueryResult {
  images: ProcessedArt[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}
