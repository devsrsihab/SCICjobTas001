
import PropTypes from "prop-types"; // ES6
import { FaRegEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";

const TaskDataRows = ({ task }) => {


  // // auth context
  // const { user } = useAuth();
  // // navigate
  // const navigate = useNavigate();
  //  Prooduct data
  const {
    _id,
    title,
    descriptions,
    deadlines,
    priorities,
  } = task;
  // setLoading(false)

  // handleAddBookForm
  // const handleAddToCart = async (id) => {
  //   setLoading(true);

  //   // extra infos
  //   const userEmail = user.email;
  //   // total price
  //   const totalPrice = (sellingPrice * quantity);

  //   // uploading data in db
  //   try {
  //     // form data
  //     const formData = {
  //       productId: _id,
  //       userEmail,
  //       shopOwnerEmail, 
  //       buildingtName,
  //       buildingImage,
  //       quantity,
  //       discount,
  //       sellingPrice,
  //       totalPrice,
  //       shopId
  //     };
  //     console.table(formData);

  //     // save building in mongodb
  //     await insertCart(userEmail, id, formData)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           toast.success("You have successfully add to cart");
  //           setLoading(true);
  //           navigate(`/checkout/${userEmail}`);
  //         }
  //       })
  //       .catch((err) => {
  //         if (err.response.status === 409) {
  //           return toast.error("Already Add in Cart");
  //         }
  //         toast.error(err.message);
  //       });

  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   }
  // };

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
          <div className="icon cursor-pointer bg-primary flex items-center justify-center text-white  rounded p-2">
          <FaRegEdit />
          </div>
          <div className="icon cursor-pointer bg-green-500 flex items-center justify-center text-white  rounded p-2">
          <FaCheckDouble  />
          </div>
   
        </div>
      </td>
    </tr>
  );
};

TaskDataRows.propTypes = {
  task: PropTypes.object,
};

export default TaskDataRows;
