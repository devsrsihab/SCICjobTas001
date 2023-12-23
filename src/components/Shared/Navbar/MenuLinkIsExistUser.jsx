import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MenuLinkIsExistUser = () => {
  const { logOut } = useAuth();

  return (
    <>
      <Link
        to="/"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Home
      </Link>
      <Link
        to="/dashboard/welcome"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Daashboard
      </Link>
      <a onClick={logOut} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
        Logout
      </a>
    </>
  );
};

export default MenuLinkIsExistUser;
