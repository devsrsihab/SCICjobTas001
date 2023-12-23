import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";

const Navitem = ({ to,label, icon: Icon }) => {
  return (
    <>
      <Link
        to={`/dashboard${to}`}
        title=""
        className="flex cursor-pointer items-center border-l-primary py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-primary capitalize hover:text-primary focus:border-l-4"
      >
        <Icon className="mr-4 size-5 align-middle" />        
        {label}
      </Link>
    </>
  );
};

Navitem.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.func,
};

export default Navitem;
