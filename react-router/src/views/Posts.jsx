import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const baseurl = "https://jsonplaceholder.typicode.com";

        const getPostsEndpoint = `${baseurl}/posts`;

        const response = await fetch(getPostsEndpoint);
        const data = await response.json();

        console.log("------->", data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    navigate(id.toString());
  };

  return (
    <div>
      <h1>The Posts</h1>

      <div style={{ marginBottom: 40 }}>
        <NavBar />
      </div>

      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px dashed", marginBottom: 10 }}>
          <div>{post.title}</div>

          <button style={{ marginTop: 5 }} onClick={() => handleClick(post.id)}>
            see more
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
