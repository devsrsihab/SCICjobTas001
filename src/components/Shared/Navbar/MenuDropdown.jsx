import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import MenuLinkIsNotExistUser from "./MenuLinkIsNotExistUser";
import MenuLinkIsExistUser from "./MenuLinkIsExistUser";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">

            {user ? (
              <MenuLinkIsExistUser/>
            ) : (
              <MenuLinkIsNotExistUser/>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
