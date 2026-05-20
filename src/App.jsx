
// import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Pages/Home";




 

function App() {

  
  return (
    <>
      <Home></Home>

      <ToastContainer />

      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </>
  );
}

export default App;
