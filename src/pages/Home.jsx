import { lazy, Suspense } from "react";

// =========================
// SECTIONS
// =========================

const Hero = lazy(() =>
  import("../sections/Hero/Hero")
);

const CTA = lazy(() =>
  import("../sections/CTA/CTA")
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
        <Hero />
        <CTA />
        <Thumbnails id="projects" />
        <Websites />
        <About />
        <FeedbacksFooterSection />
      </Suspense>
    </main>
  );
}