import { Suspense, useState } from "react";
import Carts from "./Carts";
import ProductCard from "./ProductCard";

const AllProducts = ({ carts, setCarts }) => {
  const [activeTab, setActiveTab] = useState("product");
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
          <div className="text-center bg-white shadow-lg w-fit px-4 py-3 rounded-full">
            <div className="flex items-center gap-4">
              {/* Products Button */}
              {activeTab === "product" ? (
                <button
                  onClick={() => setActiveTab("product")}
                  className="px-6 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full btn"
                >
                  Products
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab("product")}
                  className="btn p-[1px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-lg"
                >
                  <div className="flex items-center px-6 py-3 bg-white rounded-full h-full w-full">
                    <span className="text-base font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                      Products
                    </span>
                  </div>
                </button>
              )}

              {/* Cart Button */}
              {activeTab === "carts" ? (
                <button
                  onClick={() => setActiveTab("carts")}
                  className="px-6 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full btn"
                >
                  Cart ({carts.length})
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab("carts")}
                  className="btn p-[1px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-lg"
                >
                  <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full h-full w-full">
                    <span className="text-base font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                      Cart <span>({carts.length})</span>
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part Dynamic Card Section */}
      <div>
        {activeTab == "product" ? (
          <Suspense
            fallback={
              <div className=" flex  gap-1 text-[#9514FA] justify-center items-center py-16">
                
                <span className="loading loading-dots loading-xl"></span>
                <span className="loading loading-dots loading-xl"></span>
                <span className="loading loading-dots loading-xl"></span>
              </div>
            }
          >
            <ProductCard carts={carts} setCarts={setCarts}></ProductCard>
          </Suspense>
        ) : (
          <Carts setCarts={setCarts} carts={carts}></Carts>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
