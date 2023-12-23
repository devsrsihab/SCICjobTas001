import { Outlet } from "react-router-dom"
import Sidebar2 from "../components/Dashboard/Sidebar/Sidebar"

const DashboardLayout = () => {
    return (
      <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <Sidebar2/>
        <div className='flex-1 '>
          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet/>
            
            
            </div>
        </div>
      </div>
    )
  }
  
  export default DashboardLayout