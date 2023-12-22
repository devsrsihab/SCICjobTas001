import PropTypes from 'prop-types'; // ES6

const UserType = ({title, desc, icon:Icon}) => {
  return (
    <div className="relative rounded-xl border-t-4 border-blue-200 bg-white shadow">
      <div className="flex flex-col items-center py-10">
        <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">
          {/* <span class="absolute -top-4 h-2 w-full bg-blue-200"></span> */}
          <Icon className="text-3xl" />
        </div>
        <span className="mt-3 font-medium capitalize">{title}</span>
        <p className="mt-3 p-3 text-center">
         {desc}
        </p>
      </div>
    </div>
  );
};


UserType.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.func,
}

export default UserType;
