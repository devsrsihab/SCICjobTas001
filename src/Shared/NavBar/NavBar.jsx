import { Link} from "react-router-dom";
import logo from '../../../src/assets/images/demo_logo.png'

const NavBar = () => {
   const navlink=<>
    <Link className="uppercase mr-3" to="/"> Home</Link>
    <Link className="uppercase mr-3" to="/login">Login</Link>
    <Link className="uppercase mr-3" to="/register">Register</Link>
    
    </>
   
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button"className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {
        navlink
     }
      </ul>
    </div>
    

    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlink
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="border-2 py-2 px-8 rounded-md">Sign In</a>
  </div>
</div>
            
        </div>
    );
};

export default NavBar;