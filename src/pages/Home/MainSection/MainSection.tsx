import { useContext, useEffect } from "react";
import StoreContext from "../../../context/Store";

const MainSection = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("MainSection must be used within a StoreProvider");
  }

  const { images, isLoading, fetchData } = context;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (images.length === 0) {
    return <h1>No images found</h1>;
  }

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </div>
      ))}
    </div>
  );
};

export default MainSection;
