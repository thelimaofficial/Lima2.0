
import { lazy, Suspense } from "react";

// SECTIONS

const HeroCTATransition = lazy(() =>
  import("../sections/HeroCTATransition/HeroCTATransition")
);

const Thumbnails = lazy(() =>
  import("../sections/Thumbnails/Thumbnails")
);

const Websites = lazy(() =>
  import("../sections/Websites/Websites")
);

const About = lazy(() =>
  import("../sections/About/About")
);

const FeedbacksFooterSection = lazy(() =>
  import("../sections/Feedbacks/Feedbacks")
);

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-[#090909]
        text-white
      "
    >
      <Suspense fallback={null}>
        {/* HERO */}

        <HeroCTATransition />

        {/* THUMBNAILS */}

        <Thumbnails id="projects" />

        {/* WEBSITES */}

        <Websites />

        {/* ABOUT */}

        <About />

        {/* FEEDBACKS */}

        <FeedbacksFooterSection />
      </Suspense>
    </main>
  );
}