import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#414040]">
      <Provider>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProjectsSection />
        </div>
        <Footer />
      </Provider>
    </main>
  );
}
