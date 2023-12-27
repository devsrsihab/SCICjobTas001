import PropTypes from "prop-types"; // ES6
import { FaRegEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";

const TaskDataRows = ({ task, handleTaskEditData }) => {
  // // navigate
  // const navigate = useNavigate();
  //  Prooduct data
  const { _id, title, descriptions, deadlines, priorities } = task;
  // setLoading(false)

  return (
    <tr
      style={{ alignItems: "center" }}
      className="odd:bg-gray-50 even:bg-white "
    >
      <td className="px-6 py-4 whitespace-nowrap">{_id}</td>
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
        {title}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">{descriptions}</td>
      <td className="px-6 py-4 whitespace-nowrap">{deadlines}</td>
      <td className="px-6 py-4 whitespace-nowrap">{priorities}</td>
      <td className=" px-6 whitespace-nowrap">
        <div className="action-buttons flex gap-3 text-xl ">
          <div onClick={() => handleTaskEditData(_id)} className="icon cursor-pointer bg-primary flex items-center justify-center text-white  rounded p-2">
            <FaRegEdit />
          </div>
          <div className="icon cursor-pointer bg-green-500 flex items-center justify-center text-white  rounded p-2">
            <FaCheckDouble />
          </div>
        </div>
      </td>
    </tr>
  );
};

TaskDataRows.propTypes = {
  task: PropTypes.object,
  handleTaskEditData: PropTypes.func,
};

export default TaskDataRows;
