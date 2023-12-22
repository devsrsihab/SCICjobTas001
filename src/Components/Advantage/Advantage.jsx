import herotwo from "../../assets/images/hero2.png";
const Advantage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-screen-lg mx-auto mt-12 gap-8">
      <div className="advantage-image">
        <img className="" src={herotwo} alt="" />
      </div>
      <div className="advantage-text">
        <h3 className="text-2xl py-2 font-bold">
          Get the Micronet Advantage. Our stats speak for temselves.
        </h3>
        <p className="py-5">
          It is a long established fact that a reader will be distracted. It is
          a long established fact that a reader will be distracted.
        </p>
        <div className="advantage-inner-box flex gap-5">
          <div className="advantage-inner-right">
            <h2 className="font-bold">Intense research</h2>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
          <div className="advantage-inner-center border-2 border-[#D88531] rounded-lg p-4 text-[#D88531] text-center text-2xl">
            <p>5 <br /> Active <br /> Projects</p>
          </div>
          <div className="advantage-inner-left">
            <h2 className="font-bold">Audience segmentation</h2>
            <p>It is a long established fact that a reader will be distracted.</p>
          </div>

        </div>

       <div className=" border-2  py-2 px-2 mt-12">
       <input  className="w-[430px]" type="text" name="" id="" placeholder=" Enter  email to subscribe  " /> 
        <input className=" rounded-lg text-white hover:bg-white hover:text-[#D88531] border-2 border-[#D88531] cursor-pointer bg-[#D88531] py-2 px-3" type="submit" value="Subscribe" />
       </div>
      </div>
    </div>
  );
};

export default Advantage;
