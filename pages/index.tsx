import FeaturedPost from "@/component/Home-page/FeaturedPost";
import Hero from "@/component/Home-page/Hero";

const HomePage = () => {
  const DUMMY_DATA = [
    {
      slug: "getting-started-with-nextjs",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      date: "2022-05-22",
      description: "next js is production framework for react js ",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      date: "2022-05-22",
      description: "next js is production framework for react js ",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      date: "2022-05-22",
      description: "next js is production framework for react js ",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      date: "2022-05-22",
      description: "next js is production framework for react js ",
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_DATA} />
      
    </>
  );
};

export default HomePage;
