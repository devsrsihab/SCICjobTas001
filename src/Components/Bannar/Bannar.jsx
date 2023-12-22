import bannarlogo from '../../assets/images/her_micronet.jpg'
const Bannar = () => {
    return (
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row h-[100vh] items-center">
            

            <div className="bannar-text">
                <h2 className='text-6xl font-bold  py-2'>Manage work </h2>
                <h2  className='text-[#D88531] text-6xl py-2'>Efficiently.</h2>
                <h2 className='text-2xl py-2'>Plan, Track and Organise your work.</h2>
                <p className='text- mb-2'>An Intranet platform to Manage projects, organise work <br /> and focus on what’s important.</p>
                <button className=' rounded-lg bg-[#D88531] py-3 px-10'>Learn More</button>
            </div>
            <div className="bannar-image">
                <img className='w-[600px]' src={bannarlogo}alt="" />
            </div>
            
        </div>
    ); 
};

export default Bannar;