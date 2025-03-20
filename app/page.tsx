
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900 font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
