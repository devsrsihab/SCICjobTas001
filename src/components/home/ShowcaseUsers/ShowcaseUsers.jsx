import UserType from "./UserType";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const ShowcaseUsers = () => {
  return (
    <>
      <section className="bg-primary py-10 leading-6 text-blue-900 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl">
            <span className="absolute -top-4 h-2 w-14 bg-white" />
            <h2 className="text-xl font-medium leading-9 text-white sm:text-3xl sm:leading-tight">
              Impressive User Type in 2 Years
            </h2>
            {/* <p class="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae enim cupiditate necessitatibus tempore molestias?</p> */}
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-24 lg:grid-cols-4">
            {/* teacher */}
            <UserType title="teacher" desc="all over teacher in our platform , Most of teacher not her daily work and notes in our app" icon={GiTeacher}  />
            {/* student */}
            <UserType title="student" desc="all over student in our platform , Most of student not her daily work and notes in our app" icon={PiStudent}  />
            {/* workder */}
            <UserType title="worker" desc="all over worker in our platform , Most of worker not her daily work and notes in our app" icon={MdOutlineHomeWork}  />
            {/* doctor */}
            <UserType title="doctor" desc="all over doctor in our platform , Most of doctor not her daily work and notes in our app" icon={FaUserDoctor}  />

 
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseUsers;
