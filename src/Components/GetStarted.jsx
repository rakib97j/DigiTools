import User from "/user.png"
import Package from "/package.png"
import Rocket from "/rocket.png"

const GetStarted = () => {
    return (
      <div>
        <div className="container mx-auto py-28">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className=" text-5xl font-extrabold text-[#101727] mb-4">
              Get Started in 3 Steps
            </h1>
            <p className="text-[#627382] font-normal text-base mb-10 leading-5">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          {/* Card */}
          <div className="grid md:grid-cols-2 md:mx-5 mx-5 lg:grid-cols-3 gap-7  text-center">
            {/* Card 01 */}
            <div
              className="p-6 bg-white rounded-2xl text-center transition-all duration-300 ease-in-out
                        hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-2
                        group-hover:bg-[#FCF9FF]"
            >
              <div className="flex justify-end">
                <p className="text-white px-2.5 py-1.5  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-sm font-bold  rounded-full w-fit ">
                  01
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={User}
                  alt="User Png"
                  className="p-5 bg-[#c17bf741] rounded-full"
                />
              </div>
              <h1 className=" my-4 text-[#001931] font-bold text-2xl">
                Create Account
              </h1>
              <p className="mb-16 font-normal text-[#627382] leading-5 text-base ">
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>

            {/* Card 02 */}
            <div
              className="p-6 bg-white rounded-2xl transition-all duration-300 ease-in-out
                        hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-2
                        group-hover:bg-[#FCF9FF]"
            >
              <div className="flex justify-end">
                <p className="text-white px-2.5 py-1.5  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-sm font-bold  rounded-full w-fit ">
                  02
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="p-5 bg-[#c17bf741] rounded-full"
                  src={Package}
                  alt="User Png"
                />
              </div>
              <h1 className=" my-4 text-[#001931] font-bold text-2xl">
                Choose Products
              </h1>
              <p className="mb-16 font-normal text-[#627382] leading-5 text-base ">
                Browse our catalog and select the tools <br /> that fit your
                needs.
              </p>
            </div>

            {/* Card 03 */}
            <div
              className="p-6 bg-white rounded-2xl transition-all duration-300 ease-in-out
                        hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-2
                        group-hover:bg-[#FCF9FF]"
            >
              <div className="flex justify-end">
                <p className="text-white px-2.5 py-1.5  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-sm font-bold  rounded-full w-fit ">
                  03
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="p-6 bg-[#c17bf741] rounded-full "
                  src={Rocket}
                  alt="User Png"
                />
              </div>
              <h1 className=" my-4 text-[#001931] font-bold text-2xl">
                Start Creating
              </h1>
              <p className="mb-16 font-normal text-[#627382] leading-5 text-base ">
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GetStarted;