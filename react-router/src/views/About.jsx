import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    return () => {
      console.log("Component is unmounting....");
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
