import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const baseurl = "https://jsonplaceholder.typicode.com";

        const getPostEndpoint = `${baseurl}/posts/${postId}`;

        const response = await fetch(getPostEndpoint);
        const data = await response.json();

        setPost(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>The Post</h1>

      <Link to={"/posts"}>
        <button>Go Back</button>
      </Link>

      <h1>Post</h1>

      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
