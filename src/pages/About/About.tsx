import { motion } from "framer-motion";

const aboutData = [
  {
    title: "About Us",
    content:
      "At Lithium, we believe that creativity knows no bounds. Founded with the mission to make stunning visuals accessible to everyone, our platform bridges the gap between talented photographers and those who need their work to shine. With an ever-growing library of free images, we strive to inspire and support creators globally.",
  },
  {
    title: "A World of Stunning Imagery",
    content:
      "Dive into our extensive collection of photos spanning countless categories, from breathtaking landscapes to vibrant cityscapes, candid portraits, and intricate textures. Every photo is curated to ensure quality, relevance, and inspiration for your projects.",
  },
  {
    title: "Photo Source",
    content:
      "Our photos come from a diverse community of passionate photographers who share their work with the world. Each contributor is credited, ensuring their creativity and efforts are acknowledged. We also partner with photography enthusiasts and organizations to expand our library while maintaining our commitment to quality.",
  },
  {
    title: "Our Team",
    content:
      "Lithium is run by Minwa Bentley. Bentley founded Lithium with a vision to democratize access to high-quality photography. Bentley leads Lithium's mission to provide a platform for photographers and creators to showcase their work and inspire others.",
  },
  {
    title: "Our Mission",
    content:
      "We are here to make exceptional photography universally accessible. By fostering a space for sharing, discovering, and using incredible imagery, we empower individuals and businesses to create, connect, and inspire.",
  },
];

const PageVariants = {
  hidden: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <motion.div
      variants={PageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32"
    >
      <div className="bg-about-pattern bg-cover bg-center bg-no-repeat h-[50vh] text-center pt-16">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
          Discover. Inspire. Create.
        </h1>
        <p className="w-2/3 mx-auto mt-4 text-base md:text-lg xl:text-xl text-wrap">
          Welcome to Lithium, where creativity meets community. Our vision is to
          empower creators worldwide by providing a vibrant collection of
          high-quality, royalty-free photos. Whether you're a designer, blogger,
          or content creator, we aim to fuel your projects with imagery that
          tells your story.
        </p>
      </div>
      <div>
        {aboutData.map((item, index) => (
          <div key={index} className="w-10/12 md:w-4/12 lg:w-1/2 mx-auto py-12">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-base text-gray-300">{item.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
