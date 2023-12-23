import { Link } from "react-router-dom";

const MenuLinkIsNotExistUser = () => {
  return (
    <>
      <Link
        to="/"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Home
      </Link>
      <Link
        to="/login"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        Sign Up
      </Link>
    </>
  );
};

export default MenuLinkIsNotExistUser;
