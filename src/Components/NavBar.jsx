
const NavBar = ({ carts }) => {
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features </a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className=" cursor-pointer md:ml-15 font-black text-3xl flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
          >
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold text-base">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features </a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 ">
          <div className="indicator cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>
            <span className="  p-1 badge badge-sm indicator-item bg-transparent text-[#9000ff9a] border-0 text-base  font-black rounded-full  ">
              {carts.length}
            </span>
          </div>
          <a
            href="#"
            className=" mr-4 font-semibold text-base text-[#101727]   hover:bg-[#4f39f63f] rounded-full px-4 py-3"
          >
            Login
          </a>
          <a className=" hover:from-[#9614fa9a]  hover:to-[#4f39f6a2]  cursor-pointer md:mr-15 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-semibold rounded-full px-4 py-3 md:block hidden">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;