import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import ReadyTo from "../Components/ReadyTo";
import Stats from "../Components/Stats";

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





      {/* Ready To Transform Section */}
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-28 ">
        <ReadyTo></ReadyTo>
      </div>

      
    </div>
  );
};

export default Home;
