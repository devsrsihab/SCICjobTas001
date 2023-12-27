import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { getAllTasks, getSingleTask } from "../../../apis/task";
import useAuth from "../../../hooks/useAuth";
import TaskDataRows from "./TaskDataRows";
import { useQuery } from "@tanstack/react-query";
import EditTaskModal from "./EditTaskModal";
import { ImSpinner10 } from "react-icons/im";

const TaskCreation = () => {
  // auth context
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [edtiTaskData, setEdtiTaskData] = useState([]);

  const { isLoading, data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(user.email),
    enabled: !!user.email, // Enable the query only if user.email exists
  });

  // edit a task data
  const handleTaskEditData = (id) => {
    getSingleTask(id)
      .then((res) => {
        setEdtiTaskData(res);
        setIsEditOpen(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // hanlde modal
  const handleOPenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 my-10 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg ">
            <h3 className="text-gray-800  text-xl font-bold sm:text-2xl">
              {/* {` Total Sale Collection ${tasks.length} `} */}
              Task Creation
            </h3>
          </div>
          <div className="max-w-lg ">
            <button
              type="button"
              onClick={handleOPenModal}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              Make Your Task
            </button>
          </div>
        </div>
        <div className="items-start mt-5 justify-between md:flex">
          <div className="w-full">
            <form autoComplete="off">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="search"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </form>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6 ">ID</th>
                <th className="py-3 px-6 ">Title</th>
                <th className="py-3 px-6">Descripion</th>
                <th className="py-3 px-6">Deadlines</th>
                <th className="py-3 px-6">Priorities</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y relative  ">
            {isLoading &&  <div className="loader bg-black/20 absolute h-28 flex items-center justify-center w-full ">
              <ImSpinner10 className="text-4xl animate-spin " />
            </div> }

   
              
              {tasks
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item._id.includes(search);
                })

                .map((task) => (
                  <TaskDataRows
                    key={task._id}
                    task={task}
                    handleTaskEditData={handleTaskEditData}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* modal box */}
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* edit modal */}
      <EditTaskModal edtiTaskData={edtiTaskData} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
  
    </>
  );
};

export default TaskCreation;
