import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Rules from "@/components/Rules";
import Staff from "@/components/Staff";
import HowToJoin from "@/components/HowToJoin";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Rules />
      <Staff />
      <HowToJoin />
      <Footer />
    </div>
  );
};

export default Index;
