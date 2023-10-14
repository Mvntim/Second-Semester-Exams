import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about" style={{ marginLeft: 10 }}>
        About Us
      </NavLink>

      <NavLink to="/posts" style={{ marginLeft: 10 }}>
        Posts
      </NavLink>
    </nav>
  );
};

export default NavBar;
