import { useEffect } from "react";
import NavBar from "../components/NavBar";

const About = () => {
  useEffect(() => {
    return () => {
      console.log("Component is unmounting....");
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <NavBar />
    </div>
  );
};

export default About;
