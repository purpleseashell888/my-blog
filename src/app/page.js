import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#414040]">
      <Provider>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
        </div>
        <Footer />
      </Provider>
    </main>
  );
}
