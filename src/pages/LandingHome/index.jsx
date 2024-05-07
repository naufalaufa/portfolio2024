import About from "../../components/About";
import Footer from "../../components/Footer";
import JumbotronCarousel from "../../components/JumbotronCarousel";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TextReveal from "../../components/TextReveal";

const LandingHome = () => {
  return (
    <>
      <Navbar />
      <JumbotronCarousel />
      <TextReveal />
      <About />
      <Footer />
      <Sidebar />
    </>
  );
};

export default LandingHome;
