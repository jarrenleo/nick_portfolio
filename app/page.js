// import Navigation from "./_components/Navigation";
// import Intro from "./_components/Intro";
// import Articles from "./_components/Articles";
// import WorkExperience from "./_components/WorkExperience";
// import Footer from "./_components/Footer";

// export default function Home() {
//   return (
//     <main>
//       <div className="px-6 pt-8">
//         <Navigation />
//         <Intro />
//         <Articles />
//         <WorkExperience />
//       </div>
//       <Footer />
//     </main>
//   );
// }

import Navigation from "./_components/Navigation";
import Intro from "./_components/Intro";
import Articles from "./_components/Articles";
import WorkExperience from "./_components/WorkExperience";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 md:flex md:min-h-screen md:flex-col">
      <Navigation />
      <div className="md:flex md:flex-1 md:flex-wrap">
        <div className="md:order-1 md:w-1/2 md:pr-4">
          <Intro />
        </div>
        <div className="order-3 md:order-2 md:w-1/2 md:pl-4">
          <WorkExperience />
        </div>
        <div className="order-2 w-full md:order-3">
          <Articles />
        </div>
      </div>
      <Footer />
    </main>
  );
}
