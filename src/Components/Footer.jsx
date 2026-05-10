const Footer = () => {
    return (
      <div className="container mx-auto text-white ">
        {/* First Part of Footer */}
        <div className="border-b border-[#cecece77] pb-20 flex flex-wrap justify-center md:justify-between gap-y-10">
          {/* First Part 1st col */}
          <div className="w-full sm:w-1/2 lg:w-auto text-center md:text-left">
            <h1 className="text-white text-4xl font-black mb-4">DigiTools</h1>
            <p className=" text-base font-normal text-[#fafafa96] ">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          {/* First Part 2nd col */}
          <div className="w-full sm:w-1/2 lg:w-auto text-center md:text-left">
            <h4 className="mb-4 font-medium text-xl">Product</h4>
            <ul className=" space-y-4 text-base font-normal text-[#fafafa96] ">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>
          {/* First Part 3rd col */}
          <div className="w-full sm:w-1/2 lg:w-auto text-center md:text-left">
            <h4 className="mb-4 font-medium text-xl">Company</h4>
            <ul className=" space-y-4 text-base font-normal text-[#fafafa96] ">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          {/* First Part 4th col */}
          <div className="w-full sm:w-1/2 lg:w-auto text-center md:text-left">
            <h4 className="mb-4 font-medium text-xl">Resources</h4>
            <ul className=" space-y-4 text-base font-normal text-[#fafafa96] ">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* First Part 5th col */}
          <div className="w-full sm:w-1/2 lg:w-auto text-center md:text-left">
            <h1 className="mb-4 font-medium text-xl">Social Links</h1>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/rakib97j/ "
                className="px-2.5 py-2  rounded-full bg-white"
              >
                <i class="fa-brands fa-instagram text-[#101727]"></i>
              </a>
              <a
                href="https://www.facebook.com/rakib97j "
                className="px-2.5 py-2  rounded-full bg-white"
              >
                <i class="fa-brands fa-square-facebook text-[#101727]"></i>
              </a>
              <a
                href="https://github.com/rakib97j "
                className="px-2.5 py-2  rounded-full bg-white"
              >
                <i class="fa-brands fa-github text-[#101727]"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Second Part of footer */}
        <div className="md:flex text-center md:items-start justify-between mt-8 text-[#fafafa83] text-base font-normal">
          {/* 2nd first Part  */}
          <div>
            <p>© 2026 Digitools. All rights reserved.</p>
          </div>
          {/* 2nd Second Part */}
          <div className=" ">
            <ul className="flex gap-14 md:mx-0 mx-3">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;