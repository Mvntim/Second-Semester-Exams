import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>

      <label>
        Fullname <br />
        <input type="text" />
      </label>

      <br />

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

      <button>Register</button>
      <small>
        <i>
          Already have an altschool account?{" "}
          <Link to="/auth/login">login here</Link>
        </i>
      </small>
    </div>
  );
};

export default Register;
