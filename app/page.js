import Navigation from "./_components/Navigation";
import Intro from "./_components/Intro";
import Articles from "./_components/Articles";
import WorkExperiences from "./_components/WorkExperiences";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <div className="px-6 pt-8">
        <Navigation />
        <Intro />
        <Articles />
        <WorkExperiences />
      </div>
      <Footer />
    </main>
  );
}
