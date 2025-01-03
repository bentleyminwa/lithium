export interface Image {
  id: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  tags: string;
}

export interface Video {
  id: number;
  tags: string;
  videos: {
    tiny: {
      url: string;
    };
  };
}

export interface StoreContextType {
  images: Image[];
  videos: Video[];
  isLoading: boolean;
  fetchImages: (page: number, perPage: number) => Promise<void>;
  fetchVideos: (page: number, perPage: number) => Promise<void>;
  term: string;
  searchText: (text: string) => void;
}
