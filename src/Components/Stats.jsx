const Stats = () => {
    return (
      <div className="  container mx-auto md:grid-cols-2  gap-6  grid lg:grid-cols-3 ">
        <div
          className="text-center transition-all duration-300 ease-in-out
                        hover:border-transparent   hover:-translate-y-2"
        >
          <h1 className="text-[#FFFFFF] font-extrabold text-6xl  mb-3">50K+</h1>
          <p className="text-[#ffffff8e] text-2xl font-medium mb-5 sm:mb-0">
            Active Users
          </p>
        </div>

        <div
          className="text-center  transition-all duration-300 ease-in-out
                        hover:border-transparent   hover:-translate-y-2 "
        >
          <h1 className="text-[#FFFFFF] font-extrabold text-6xl  mb-3">200+</h1>
          <p className="text-[#ffffff8e] text-2xl font-medium mb-5 sm:mb-0">
            Premium Tools
          </p>
        </div>
        <div
          className="text-center transition-all duration-300 ease-in-out
                        hover:border-transparent   hover:-translate-y-2
                        "
        >
          <h1 className="text-[#FFFFFF] font-extrabold text-6xl  mb-3">4.9★</h1>
          <p className="text-[#ffffff8e] text-2xl font-medium mb-5 sm:mb-0 ">
            Rating
          </p>
        </div>
      </div>
    );
};

export default Stats;