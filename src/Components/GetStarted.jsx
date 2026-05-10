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
          <div className="grid md:grid-cols-2 md:mx-0 mx-5 lg:grid-cols-3 gap-7  text-center">
            <div className="p-6 bg-white rounded-2xl text-center">
              <p>01</p>
              <div className="flex items-center justify-center">
                <img src={User} alt="User Png" />
              </div>
              <h1>Create Account</h1>
              <p>
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <p>02</p>
              <div className="flex items-center justify-center">
                <img src={Package} alt="User Png" />
              </div>
              <h1>Choose Products</h1>
              <p>
                Browse our catalog and select the tools <br /> that fit your
                needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <p>03</p>
              <div className="flex items-center justify-center">
                <img src={Rocket} alt="User Png" />
              </div>
              <h1>Start Creating</h1>
              <p>
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GetStarted;