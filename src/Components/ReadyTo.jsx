

const ReadyTo = () => {
    return (
      <div className="md:container mx-8 md:mx-auto text-center py-16 md:py-28 ">
        {/* First Portion  */}
        <div>
          <h1 className="font-extrabold text-4xl text-white mb-4">
            Ready to Transform Your Workflow?
          </h1>
          <p className="font-normal text-[#ffffffa2] text-base mb-10 ">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        </div>
        {/* Second Portion */}
        <div>
            {/* btn */}
          <div>
            <button className="px-4  py-3  bg-white rounded-full  text-base font-semibold  btn">
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                Explore Products
              </span>
            </button>
            <button className="px-4  py-3 border  rounded-full text-white ml-4  text-base font-semibold  btn bg-transparent">
              View Pricing
            </button>
          </div>
          <p className="font-normal text-[#ffffffa2] text-base mb-10  mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    );
};

export default ReadyTo;