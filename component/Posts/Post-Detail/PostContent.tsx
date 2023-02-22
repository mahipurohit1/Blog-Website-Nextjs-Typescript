import ReactMarkdown from "react-markdown";
import Style from "./post-content.module.css";
import PostHeader from "./PostHeader";
const PostContent = () => {
  const Dummy_data = {
    slug: "getting-started-with-nextjs",
    title: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    date: "2022-05-22",
    content: "# This is first posts ",
  };
  const imgPath = `/images/posts/${Dummy_data.slug}/${Dummy_data.image}`;

  return (
    <article className={Style.content}>
      <PostHeader title={Dummy_data.title} image={imgPath}></PostHeader>
      <ReactMarkdown>{Dummy_data.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
