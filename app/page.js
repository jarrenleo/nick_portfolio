import Navigation from "./_components/navigation/Navigation";
import Hero from "./_components/hero/Hero";
import Articles from "./_components/articles/Articles";
import WorkExperience from "./_components/work_experience/WorkExperience";
import Footer from "./_components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6">
        <Navigation />
        <Hero />
        <Articles />
        <WorkExperience />
      </div>
      <Footer />
    </>
  );
}
