import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <label>
        Email <br />
        <input type="text" />
      </label>

      <br />

      <label>
        Password <br />
        <input type="password" />
      </label>

      <br />

      <button>Log in</button>
      <small>
        <i>
          Don't have an altschool account?{" "}
          <Link to="/auth/register">register here</Link>
        </i>
      </small>
    </div>
  );
};

export default Login;
