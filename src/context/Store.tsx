import { createContext, useCallback, useState } from "react";
import { Image, StoreContextType, Video } from "../common/types/types";

const StoreContext = createContext<StoreContextType | void>(undefined);

function Provider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<Image[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [term, setTerm] = useState("");

  const fetchImages = useCallback(
    async (page: number, perPage: number) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&page=${page}&per_page=${perPage}`
        );
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [term]
  );

  const fetchVideos = useCallback(
    async (page: number, perPage: number) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pixabay.com/api/videos/?key=${process.env.REACT_APP_API_KEY}&q=${term}&page=${page}&per_page=${perPage}`
        );
        const data = await response.json();
        setVideos(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [term]
  );

  const searchText = useCallback((text: string) => {
    setTerm(text);
  }, []);

  const state = {
    images,
    videos,
    isLoading,
    term,
    searchText,
    fetchImages,
    fetchVideos,
  };

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
}

export { Provider };
export default StoreContext;
