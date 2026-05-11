import ProductCard from "./ProductCard";




const AllProducts = ({ carts, setCarts }) => {
  return (
    <div>
      {/* 1st part  */}
      <div>
        <div className="text-center">
          <h1 className="text-[#101727] text-5xl font-extrabold mb-4">
            Premium Digital Tools
          </h1>
          <p className="mb-4 text-[#627382] font-normal text-base leading-5 ">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Button Div */}
        <div className="flex justify-center mb-10">
          <div className=" text-center bg-white shadow-lg w-fit px-4 py-3 rounded-full ">
            <div>
              <button className="px-4  py-3  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full btn ">
                Products
              </button>

              <button className="btn px-[1px] py-[1px] ml-4 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  hover:shadow-lg">
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full h-full w-full">
                  <span className="text-base font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    Cart <span>({carts.length})</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part Dynamic Card Section */}
      <div>
        <ProductCard carts={carts} setCarts={setCarts}></ProductCard>
      </div>
    </div>
  );
};

export default AllProducts;