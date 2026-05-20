// import toast from "react-hot-toast";
// import { ToastContainer } from "react-toastify";

import { toast } from "react-toastify";

const Carts = ({carts ,setCarts}) => {

    const total = carts.reduce((sum , cart) => sum + cart.price , 0);


    // Delete FunCtion
    const removeCartItem =(id) => {
        const filterCarts = carts.filter( cart => cart.id != id)
        setCarts(filterCarts)
        toast.error("Item Remove")
    }


// Checkout FUnction 
    const handleCheckout = () => {
      setCarts([]); 
      toast.success("Checkout successful!");
    };

    if(carts.length == 0 ){
        return (
          <div className=" md:mx-5  mx-5 shadow-xl border-2 border-[#F2F2F2] rounded-2xl bg-white p-10 text-center text-[#101727] font-black text-5xl">
            <h1 className="text-2xl font-bold text-[#101727] mb-6">
              Your Cart
            </h1>
            <h1>No Carts Available</h1>
          </div>
        );
    }
    return (
      <div className="border-2 shadow-xl border-[#F2F2F2] rounded-2xl bg-white p-10  md:mx-5  mx-5">
        <h1 className=" text-2xl font-bold text-[#101727] mb-6">Your Cart</h1>
        {carts.map((cart) => (
          <div key={cart.id}>
            {/* cart card */}
            <div className="bg-[#F9FAFC] p-5 rounded-2xl flex items-center shadow-md justify-between gap-5 mb-4">
              {/* Cart icon */}
              <div className="flex gap-4">
                <div>
                  <p className=" px-3.5 py-3  border bg-[#c3a6da56] border-[#F2F2F2] rounded-full w-fit">
                    {cart.icon}
                  </p>
                </div>

                <div>
                  <h1 className="text-[#101727]  font-semibold text-xl ">
                    {cart.name}
                  </h1>
                  <p className="text-[#627382] font-normal text-base">
                    ${cart.price}
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => removeCartItem(cart.id)}
                  className="text-[#FF3980] font-bold text-base cursor-pointer"
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Cart Total */}
        <div className="flex justify-between my-5">
          <h1 className="text-[#627382] font-normal text-base">total:</h1>
          <h1 className="text-2xl font-bold text-[#101727] "> ${total}</h1>
        </div>

        <button
          onClick={() => handleCheckout()}
          className="px-4 w-full  py-3  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-base font-bold rounded-full btn "
        >
          Proceed to Checkout
        </button>
      </div>
    );
};

export default Carts;