import SidebarNavs from "./SidebarNavs";

const Sidebar = () => {
    return (
        <div className="bg-gray-100">
  <div className="h-screen w-64 pb-10">
    <div className="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
      <div className="flex mt-10 items-center px-4">
        <img
          className="h-12 w-auto max-w-full align-middle"
          src="https://componentland.com/images/R-Wx_NHvZBci3KLrgXhp1.png"
          alt=""
        />
        <div className="flex ml-3 flex-col">
          <h3 className="font-medium">Sarah Carter</h3>
          <p className="text-xs text-gray-500">Sr. Engineer</p>
        </div>
      </div>
      <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
        Analytics
      </span>
      <div className="flex mt-3 flex-1 flex-col">
        <div className="nav-items">
          {/* nav items */}
          <SidebarNavs/>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Sidebar;