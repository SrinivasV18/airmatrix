import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TeamSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
