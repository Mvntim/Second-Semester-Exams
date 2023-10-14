import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const baseurl = "https://jsonplaceholder.typicode.com";

        const getPostsEndpoint = `${baseurl}/posts`;

        const response = await fetch(getPostsEndpoint);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
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

      {isLoading && <Spinner />}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{ border: "1px dashed", marginBottom: 10 }}
            >
              <div>{post.title}</div>

              <button
                style={{ marginTop: 5 }}
                onClick={() => handleClick(post.id)}
              >
                see more
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
