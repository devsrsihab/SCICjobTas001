import taks1 from '../../assets/images/taks-one-removebg-preview.png'
import tast2 from '../../assets/images/download__1_-removebg-preview.png'
import task3 from '../../../src/assets/images/download-removebg-preview.png'
const BannarBottom = () => {
    return (
        <div className=" bg-[#F8FAFC] py-10">
            <div className=" max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-1">
            <div className=" flex-1 bannar-bottom-left">
                <h2 className="text-2xl font-bold">See how Micronet can help you improve <br />your systems & productivity.</h2>
            </div>
            <div className=" flex-1 bannar-bottom-right">
                <h4 className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</h4>
            </div>
            </div> 

            <div className="  max-w-screen-lg mx-auto services mt-16 flex flex-col lg:flex-row gap-5">
                <div className="services-box-1 bg-[#E3DEFC] rounded-lg py-10 px-5">
                    <img className='w-20' src={taks1} alt="" />
                    <h2 className='text-2xl py-2'>Task Management</h2>
                    <p>It is a long established fact that a reader will be distracted.</p>
                    
                    <button>learn more</button>
                </div>
                <div className="services-box-1 bg-[#DFFDEC] rounded-lg py-10 px-5">
                    <img className='w-24' src={tast2} alt="" />
                    <h2 className='text-2xl py-2'>Team Collaboration</h2>
                    <p>It is a long established fact that a reader will be distractedd.</p>
                    
                    <button>learn more</button>
                </div>
                <div className="services-box-1 bg-[#FCEEDF] rounded-lg py-10 px-5">
                    <img className='w-16' src={task3} alt="" />
                    <h2 className='text-2xl py-2'>Project Planning</h2>
                    <p>It is a long established fact that a reader will be distracted.</p>
                    
                    <button>learn more</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default BannarBottom;