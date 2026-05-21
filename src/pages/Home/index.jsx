import Hero from "../../components/Hero/Hero";
import TopDoctors from "../../components/TopDoctors/TopDoctors";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopDoctors />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default Home;