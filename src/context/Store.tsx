import { createContext, useCallback, useState } from "react";
import { Image } from "../common/types/types";

interface StoreContextType {
  images: Image[];
  isLoading: boolean;
  fetchData: () => Promise<void>;
  term: string;
  searchText: (text: string) => void;
}

const StoreContext = createContext<StoreContextType | void>(undefined);

function Provider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [term, setTerm] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?key=46848446-4201e1b80936076e4d594ef26&q=${term}`
      );
      const data = await response.json();
      setImages(data.hits);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [term]);

  const searchText = useCallback((text: string) => {
    setTerm(text);
  }, []);

  const state = {
    images,
    isLoading,
    term,
    searchText,
    fetchData,
  };

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
}

export { Provider };
export default StoreContext;