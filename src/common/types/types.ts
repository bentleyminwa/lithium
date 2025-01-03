export interface Image {
  id: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  tags: string;
}

export interface StoreContextType {
  images: Image[];
  isLoading: boolean;
  fetchData: () => Promise<void>;
  term: string;
  searchText: (text: string) => void;
}
