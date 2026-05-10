import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import Stats from "../Components/Stats";

const Home = () => {
  return (
    <div>
      {/* Nav Bar */}
      <NavBar></NavBar>
      {/* Banner */}
      <div className="container mx-auto  ">
        <Banner></Banner>
      </div>
      {/* State */} 
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] md:py-16 py-10  ">
        <Stats></Stats>
      </div>
    </div>
  );
};

export default Home;
