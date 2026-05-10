import { Play } from "lucide-react";
import bannerImg from "/banner.png"

const Banner = () => {
    return (
      <div className=" justify-between mb-14 mt-2.5   md:my-20 flex flex-col-reverse md:flex-row ">
        {/* left  */}
        <div className="flex flex-col justify-center items-center md:items-start ">
          <p className="bg-[#E1E7FF] w-fit px-4 py-1.5 rounded-full  mb-4 md:mt-0 mt-8 inline-flex items-center gap-2 ">
            <span className="loading loading-ring loading-sm text-[#4F39F6]  "></span>
            <span className="  text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
              New: AI-Powered Tools Available
            </span>
          </p>
          <h1 className="text-[#101727] font-extrabold text-4xl  md:text-7xl mb-4 landing-[84px]">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] font-normal text-lg leading-8 mb-8 ">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div>
            <div>
              <button className="px-4  py-3  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full btn ">
                Explore Products
              </button>

              <button className="btn px-[1px] py-[1px] ml-4 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  hover:shadow-lg">
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full h-full w-full">
                  
                  <Play className="text-[#4F39F6]" />

                  
                  <span className="text-base font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    View Pricing
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div>
          <img src={bannerImg} alt="This is Banner image" />
        </div>
      </div>
    );
};

export default Banner;