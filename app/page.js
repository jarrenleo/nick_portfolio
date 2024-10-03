import Navigation from "./_components/Navigation";
import Intro from "./_components/Intro";
import Articles from "./_components/Articles";
import WorkExperience from "./_components/WorkExperience";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 duration-500 animate-in fade-in sm:flex sm:flex-col sm:px-8">
      <Navigation />
      <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap">
        <div className="order-1 sm:flex sm:w-1/2 sm:items-center sm:pr-4">
          <Intro />
        </div>
        <div className="order-3 sm:order-2 sm:flex sm:w-1/2 sm:items-end sm:justify-end">
          <WorkExperience />
        </div>
        <div className="order-2 w-full sm:order-3">
          <Articles />
        </div>
      </div>
      <Footer />
    </main>
  );
}
