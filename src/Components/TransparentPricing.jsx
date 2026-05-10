const TransparentPricing = () => {
    return (
      <div className="my-28">
        {/* Transparent Pricing Title */}
        <div className="text-center">
          <h1 className="text-[#101727] md:font-extrabold  text-2xl  font-black  md:text-5xl ">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] text-base font-normal mt-4 leading-5 mb-10 ">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/*  Transparent Pricing Card */}

        <section className="grid md:grid-cols-2 lg:grid-cols-3  gap-7 md:mx-0 mx-5">
          {/* card-01  */}
          <div className="border border-[#F2F2F2] rounded-2xl p-6 bg-[#F9FAFC] flex flex-col justify-between ">
            <div>
              <h1 className="font-bold text-2xl text-[#101727] mb-2">
                Starter
              </h1>
              <p className="font-normal text-base text-[#627382] ">
                Perfect for getting started
              </p>
            </div>
            <h1 className="my-6 font-bold text-[40px]">
              $0
              <small className="font-normal text-xl text-[#627382]">
                /Month
              </small>
            </h1>

            <div>
              <ul>
                <li className="mb-2 text-[#627382] leading-5">
                  <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2 "></i>
                  Access to 10 free tools
                </li>
                <li className="mb-2 text-[#627382] leading-5">
                  <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                  Basic templates
                </li>
                <li className="mb-2 text-[#627382] leading-5">
                  <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                  Community support
                </li>
                <li className="mb-2 text-[#627382] leading-5">
                  <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>1
                  project per month
                </li>
              </ul>
            </div>

            <button className="px-4  py-3  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full w-full btn ">
              Get Started Free
            </button>
          </div>
          {/* card-02  */}

          <div className=" relative ">
            <p className=" btn  rounded-full py-1.5 px-3 text-[#BB4D00] font-medium text-sm bg-[#FEF3C6] border-0 absolute  -top-.5 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              
              Most Popular
            </p>

            <div className="border border-[#F2F2F2] rounded-2xl p-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
              <h1 className="font-bold text-2xl text-[#ffffff] mb-2">Pro</h1>
              <p className="font-normal text-base text-[#dededf] ">
                Best for professionals
              </p>
              <h1 className="my-6 font-bold text-[40px] text-white">
                $29
                <small className="font-normal text-xl text-[#ffffff]">
                  /Month
                </small>
              </h1>

              <ul className="">
                <li className="mb-2 text-[#ffffff] leading-5">
                  <i class="fa-solid fa-check text-white h-5 w-5  mr-2"></i>{" "}
                  Access to all premium tools
                </li>
                <li className="mb-2 text-[#ffffff] leading-5">
                  <i class="fa-solid fa-check text-white h-5 w-5 mr-2"></i>{" "}
                  Unlimited templates
                </li>
                <li className="mb-2 text-[#ffffff] leading-5">
                  <i class="fa-solid fa-check text-white h-5 w-5 mr-2"></i>{" "}
                  Priority support
                </li>
                <li className="mb-2 text-[#ffffff] leading-5">
                  <i class="fa-solid fa-check text-white h-5 w-5 mr-2"></i>
                  Unlimited projects
                </li>
                <li className="mb-2 text-[#ffffff] leading-5">
                  <i class="fa-solid fa-check text-white h-5 w-5 mr-2"></i>{" "}
                  Cloud sync
                </li>
                <li className="mb-10 text-[#ffffff] leading-5">
                  <i class="fa-solid fa-check text-white h-5 w-5 mr-2"></i>{" "}
                  Advanced analytics
                </li>
              </ul>

              <button className="px-4  py-3  bg-white text-base font-bold rounded-full w-full btn ">
                <span className="text-base font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
          {/* card-03  */}

          <div className="border border-[#F2F2F2] rounded-2xl p-6 bg-[#F9FAFC] ">
            <h1 className="font-bold text-2xl text-[#101727] mb-2">
              Enterprise
            </h1>
            <p className="font-normal text-base text-[#627382] ">
              For teams and businesses
            </p>
            <h1 className="my-6 font-bold text-[40px]">
              $99
              <small className="font-normal text-xl text-[#627382]">
                /Month
              </small>
            </h1>

            <ul>
              <li className="mb-2 text-[#627382] leading-5">
                <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2 "></i>
                Everything in Pro
              </li>
              <li className="mb-2 text-[#627382] leading-5">
                <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                Team collaboration
              </li>
              <li className="mb-2 text-[#627382] leading-5">
                <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                Custom integrations
              </li>
              <li className="mb-2 text-[#627382] leading-5">
                <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                Dedicated support
              </li>
              <li className="mb-2 text-[#627382] leading-5">
                <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>{" "}
                SLA guarantee
              </li>
              <li className="mb-10 text-[#627382] leading-5">
                <i class="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                Custom branding
              </li>
            </ul>

            <button className="px-4  py-3  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full w-full btn ">
              Contact Sales
            </button>
          </div>
        </section>
      </div>
    );
};

export default TransparentPricing;