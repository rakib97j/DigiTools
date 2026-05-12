
import { use } from "react";


// Json Fetch 

const productsPromise = fetch("./PDT.json").then((res) => res.json());


const ProductCard = ({ carts, setCarts }) => {
  const products = use(productsPromise);

  const addToCart = (product) => {

    const isExist = carts.find(c => c.id ==product.id);

    if(isExist){
      
      alert('already item added')
      return
    }

    setCarts([...carts, product]);
    
    
  };

  return (
    <div className="grid md:grid-cols-2 md:mx-5 mx-5 lg:grid-cols-3 gap-7">
      {products.map((product, id) => (
        <div key={id} className="">
          <div
            className="p-6 border-t border-t-[#F2F2F2] shadow-lg rounded-2xl  transition-all duration-300 ease-in-out
                        hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-2
                        group-hover:bg-[#FCF9FF]"
          >
            <div className="relative">
              <p
                className={`absolute -right-4  -top-4  btn  rounded-full py-1 px-3 text-[#BB4D00] font-medium text-sm bg-[#FEF3C6] border-0 ${
                  product.tagType === "new"
                    ? "text-green-600 bg-green-100"
                    : product.tagType === "popular"
                      ? "text-purple-600 bg-purple-100"
                      : "text-[#BB4D00] bg-[#FEF3C6]"
                } `}
              >
                {product.tagType}
              </p>
            </div>
            <p className=" px-3.5 py-3  border bg-[#c3a6da56] border-[#F2F2F2] rounded-full w-fit">
              {product.icon}
            </p>
            <h1 className="py-4 text-2xl font-bold text-[#101727]">
              {product.name}
            </h1>
            <p className="text-[#627382] mb-4 font-normal text-base leading-5 ">
              {product.description}
            </p>
            <h1 className="text-[#101727] font-bold text-2xl mb-4 ">
              ${product.price}
              <small className="text-[#627382] font-normal text-base">
                /{product.period}
              </small>
            </h1>
            <ul className="text-[#627382] mb-4">
              {product.features &&
                product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="mb-2 text-[#627382] leading-5 flex items-center"
                  >
                    <i className="fa-solid fa-check text-[#30B868] h-5 w-5 mr-2"></i>
                    {feature}
                  </li>
                ))}
            </ul>
            <div>
              <button
                onClick={() => addToCart(product)}
                className="px-4  w-full py-3  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full btn "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;