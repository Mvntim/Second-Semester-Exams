import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />

      <small style={{ textAlign: "center" }}>Powered by altschool</small>
    </div>
  );
};

export default AuthLayout;
