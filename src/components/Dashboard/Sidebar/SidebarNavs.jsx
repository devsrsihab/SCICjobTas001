import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

import Navitem from "./Navitem";

const SidebarNavs = () => {
  return (
    <>
      <nav className="flex-1">
        {/* dashboard */}
        <Navitem to="/welcome" label='dashboard' icon={MdOutlineDashboardCustomize} />
        {/* taskk creation */}
        <Navitem to="/task-creation" label='task creation' icon={FaTasks} />
      </nav>
      {/* <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
        Product Mangement
      </span> */}

    </>
  );
};

export default SidebarNavs;
