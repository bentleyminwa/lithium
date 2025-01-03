export interface Image {
  id: number;
  webformatURL: string;
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
