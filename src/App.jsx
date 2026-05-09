import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Lenis from "lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // LENIS SETUP

    const lenis = new Lenis({
      duration: 1.2, // Increased for smoother deceleration

      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      smoothWheel: true,
      syncTouch: true, // Maintain touch sync

      wheelMultiplier: 1,
      touchMultiplier: 1.2, // Reduced from 2 to 1.2 for more fluid scroll
    });

    // GLOBAL ACCESS

    window.lenis = lenis;

    // GSAP + LENIS SYNC

    lenis.on("scroll", ScrollTrigger.update);

    // RAF LOOP
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP delay smoothing conflicts
    gsap.ticker.lagSmoothing(0);

    // SCROLLER PROXY

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, {
            immediate: true,
          });
        }

        return lenis.scroll;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      pinType: document.body.style.transform
        ? "transform"
        : "fixed",
    });

    // REFRESH HANDLING

    const onRefresh = () => lenis.resize();

    ScrollTrigger.addEventListener("refresh", onRefresh);

    ScrollTrigger.refresh();

    // CLEANUP

    return () => {
      ScrollTrigger.removeEventListener(
        "refresh",
        onRefresh
      );

      gsap.ticker.remove(update);

      lenis.destroy();

      ScrollTrigger.killAll();

      delete window.lenis;
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;