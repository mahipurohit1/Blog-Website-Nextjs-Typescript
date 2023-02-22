import AllPosts from "@/component/Posts/AllPosts";
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
const AllPost = () => {
  return (
    <>
      <AllPosts posts={DUMMY_DATA}></AllPosts>
    </>
  );
};

export default AllPost;
