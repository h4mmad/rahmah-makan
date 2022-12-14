import Hammad from "../images/hammad.jpg";

const Team = () => {
    return (
        <section id="team">
            {/* container for heading and team dps */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center min-h-screen -mb-64">
                <h2 className="text-4xl font-bold text-center">
                    Our Team
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 mt-5 md:mt-0 space-y-6 md:w-1/4 bg-veryLightGray">
                        <img src={Hammad} className="rounded-full -mt-14 border-4 border-darkGreen md:w-full sm:w-1/2" alt="" />
                        <h5 className="text-lg font-bold">Name</h5>
                    </div>
                    <div className="flex flex-col items-center p-6 mt-5 md:mt-0 space-y-6 md:w-1/4 bg-veryLightGray">
                        <img src="" className="rounded-full -mt-14 border-4 border-darkGreen md:w-full  sm:w-1/2" alt="" />
                        <h5 className="text-lg font-bold">Name</h5>
                    </div>
                    <div className="flex flex-col items-center p-6 mt-5 md:mt-0 space-y-6 md:w-1/4 bg-veryLightGray">
                        <img src="" className="rounded-full -mt-14 border-4 border-darkGreen md:w-full  sm:w-1/2" alt="" />
                        <h5 className="text-lg font-bold">Name</h5>
                    </div>
                    <div className="flex flex-col items-center p-6 mt-5 md:mt-0 space-y-6 md:w-1/4 bg-veryLightGray">
                        <img src="" className="rounded-full -mt-14 border-4 border-darkGreen md:w-full  sm:w-1/2" alt="" />
                        <h5 className="text-lg font-bold">Name</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;