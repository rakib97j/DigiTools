
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Pages/Home";




 

function App() {

  
  return (
    <>
      <Home></Home>

      <Toaster position="top-right" reverseOrder={false} />
      
    </>
  );
}

export default App;
