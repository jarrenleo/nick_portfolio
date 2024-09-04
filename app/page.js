import Navigation from "./_components/Navigation";
import Intro from "./_components/Intro";
import Articles from "./_components/Articles";
import WorkExperience from "./_components/WorkExperience";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 sm:flex sm:flex-col sm:px-8">
      <Navigation />
      <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap">
        <div className="order-1 flex items-center sm:w-1/2 sm:pr-4">
          <Intro />
        </div>
        <div className="order-3 flex items-center justify-center sm:order-2 sm:w-1/2">
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
