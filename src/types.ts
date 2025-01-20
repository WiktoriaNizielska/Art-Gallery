export interface ArtworkData {
  data: {
    id: number;
    title: string;
    image_id: string;
  }[];
}

export interface ProcessedArt {
  id: number;
  title: string;
  imageUrl: string | null;
}

export interface ArtQueryResult {
  images: ProcessedArt[];
}
