import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import GetStarted from "../Components/GetStarted";
import NavBar from "../Components/NavBar";
import ReadyTo from "../Components/ReadyTo";
import Stats from "../Components/Stats";
import TransparentPricing from "../Components/TransparentPricing";

const Home = () => {
  return (
    <div>
      {/* Nav Bar */}
      <NavBar></NavBar>

      {/* Banner section  */}
      <div className="container mx-auto  ">
        <Banner></Banner>
      </div>

      {/* State  Section*/}
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] md:py-16 py-10  ">
        <Stats></Stats>
      </div>

      {/* Main Section  / Main > Get > Simple  */}

      {/* Get section */}
      <div className="bg-[#F9FAFC]  ">
        <GetStarted></GetStarted>
      </div>

      <div className="container mx-auto">
        {/* Simple */}
        <TransparentPricing></TransparentPricing>
      </div>

      {/* Ready To Transform Section */}
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-28 ">
        <ReadyTo></ReadyTo>
      </div>

      {/* Footer Section  */}

      <div className=" bg-[#101727] pt-28 pb-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
