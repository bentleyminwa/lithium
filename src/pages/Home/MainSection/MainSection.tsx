import { motion } from "framer-motion";
import { Image } from "../../../common/types/types";

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MainSection = ({ images }: { images: Image[] }) => {
  return (
    <motion.div className="mt-20 px-10 md:px-20">
      <h1 className="text-2xl text-[#EAEAEA] font-semibold mb-10">
        Free Stock Photos
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden ${
              index % 5 === 0
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <motion.img
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              src={image.webformatURL}
              alt={image.tags}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MainSection;
