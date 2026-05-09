import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Container from "../components/Container/Container";
import FeedbacksFooterSection from "../sections/FeedbacksFooterSection/FeedbacksFooterSection";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.svg";

export default function PrivacyPolicy() {
  const containerRef = useRef(null);

  // Scroll to top when mounted
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".pp-fade-up",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    gsap.utils.toArray(".pp-section").forEach((section) => {
      gsap.fromTo(
        section,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <main className="bg-black text-white overflow-x-hidden relative" ref={containerRef}>
      <Helmet>
        <title>Privacy Policy | Lima</title>
        <meta name="description" content="Privacy Policy explaining how we collect, use, and protect your information when you use our website and services." />
        <meta property="og:title" content="Privacy Policy | Lima" />
        <meta property="og:description" content="Privacy Policy explaining how we collect, use, and protect your information when you use our website and services." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Global Background Glows */}
      <div className="glow-bg fixed inset-0 z-0 pointer-events-none">
        <div className="glow-layer glow-1"></div>
        <div className="glow-layer glow-2"></div>
      </div>

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full p-10 lg:px-24 z-40 flex justify-between items-center">
        <img src={logo} alt="Lima Logo" className="h-12 md:h-16" />
        <Button variant="secondary" size="small" href="mailto:thelimart@outlook.com">
          Get in touch
        </Button>
      </div>

      <div className="relative z-10 pt-32 pb-24 md:pt-48 md:pb-32">
        <Container className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 md:mb-24 pp-fade-up">
            <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-bold leading-[1.05] tracking-tighter mb-6">
              Privacy Policy
            </h1>
            <p className="text-[#c1c1c1] text-lg md:text-xl max-w-2xl leading-relaxed mb-4">
              Your privacy is important to us. This page explains how we collect, use, and protect your information when you use our website and services.
            </p>
            <p className="text-sm bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent font-medium tracking-wide uppercase">
              Last updated: May 9, 2026
            </p>
          </div>

          <div className="w-full h-px bg-white/10 mb-16 md:mb-24 pp-fade-up"></div>

          {/* Content Wrapper */}
          <div className="space-y-16 md:space-y-24">
            
            <section className="pp-section">
              <p className="text-[#c1c1c1] text-lg leading-relaxed mb-8">
                Welcome to our website. Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
              </p>
              <p className="text-[#c1c1c1] text-lg leading-relaxed mb-12">
                By accessing or using this website, you agree to the terms described in this Privacy Policy.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">1.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Information We Collect</h2>
              </div>
              
              <div className="space-y-8 pl-8 md:pl-12 border-l border-white/10">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Personal Information</h3>
                  <p className="text-[#c1c1c1] mb-4 leading-relaxed">
                    Information you voluntarily provide, such as:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#c1c1c1]">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Social media profiles</li>
                    <li>Any information submitted through contact forms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Usage Data</h3>
                  <p className="text-[#c1c1c1] mb-4 leading-relaxed">
                    We may automatically collect certain information when you visit the website, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#c1c1c1]">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Referral sources</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Cookies and Tracking Technologies</h3>
                  <p className="text-[#c1c1c1] leading-relaxed">
                    We may use cookies and similar technologies to improve user experience, analyze traffic, and enhance website functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">2.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How We Use Your Information</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10">
                <p className="text-[#c1c1c1] mb-4 leading-relaxed">
                  We may use collected information to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#c1c1c1]">
                  <li>Provide and maintain our services</li>
                  <li>Respond to inquiries or contact requests</li>
                  <li>Improve website performance and user experience</li>
                  <li>Analyze website traffic and usage trends</li>
                  <li>Prevent fraudulent or unauthorized activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* 3. Cookies */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">3.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Cookies</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10">
                <p className="text-[#c1c1c1] mb-6 leading-relaxed">
                  Cookies are small files stored on your device that help improve your browsing experience.
                </p>
                <p className="text-[#c1c1c1] mb-4 leading-relaxed">
                  We may use cookies for:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#c1c1c1] mb-6">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance tracking</li>
                  <li>Remembering user preferences</li>
                </ul>
                <p className="text-[#c1c1c1] leading-relaxed">
                  Users can disable cookies through browser settings, although some parts of the website may not function properly.
                </p>
              </div>
            </section>

            {/* 4. Third-Party Services */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">4.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Third-Party Services</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10 space-y-6">
                <p className="text-[#c1c1c1] leading-relaxed">
                  We may use trusted third-party services to support our website and services, including analytics, hosting, and communication tools.
                </p>
                <p className="text-[#c1c1c1] leading-relaxed">
                  These third parties may have access to limited information necessary to perform their functions but are not permitted to use it for other purposes.
                </p>
                <div>
                  <p className="text-[#c1c1c1] mb-4 leading-relaxed">Examples may include:</p>
                  <ul className="list-disc pl-5 space-y-2 text-[#c1c1c1]">
                    <li>Google Analytics</li>
                    <li>Vercel</li>
                    <li>Cloudflare</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Data Security */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">5.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Data Security</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10 space-y-6">
                <p className="text-[#c1c1c1] leading-relaxed">
                  We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p className="text-[#c1c1c1] leading-relaxed">
                  However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* 6. Your Rights */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">6.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Your Rights</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10 space-y-6">
                <p className="text-[#c1c1c1] mb-4 leading-relaxed">
                  Depending on your location and applicable laws, you may have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#c1c1c1] mb-6">
                  <li>Access the personal data we hold about you</li>
                  <li>Request corrections to your information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Object to certain processing activities</li>
                </ul>
                <p className="text-[#c1c1c1] leading-relaxed">
                  To exercise these rights, users may contact us using the information below.
                </p>
              </div>
            </section>

            {/* 7. External Links */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">7.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">External Links</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10 space-y-6">
                <p className="text-[#c1c1c1] leading-relaxed">
                  Our website may contain links to external websites that are not operated by us.
                </p>
                <p className="text-[#c1c1c1] leading-relaxed">
                  We are not responsible for the privacy practices, content, or policies of third-party websites.
                </p>
              </div>
            </section>

            {/* 8. Children’s Privacy */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">8.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Children’s Privacy</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10">
                <p className="text-[#c1c1c1] leading-relaxed">
                  Our services are not directed toward children under the age required by applicable law, and we do not knowingly collect personal information from children.
                </p>
              </div>
            </section>

            {/* 9. Changes to This Privacy Policy */}
            <section className="pp-section">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">9.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Changes to This Privacy Policy</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10 space-y-6">
                <p className="text-[#c1c1c1] leading-relaxed">
                  We may update this Privacy Policy from time to time.
                </p>
                <p className="text-[#c1c1c1] leading-relaxed">
                  Any changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </section>

            {/* 10. Contact Us */}
            <section className="pp-section" id="section-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent text-2xl font-bold">10.</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact Us</h2>
              </div>
              <div className="pl-8 md:pl-12 border-l border-white/10 space-y-6">
                <p className="text-[#c1c1c1] leading-relaxed">
                  If you have any questions about this Privacy Policy or your personal data, you may contact us at:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                  <a 
                    href="mailto:thelimart@outlook.com" 
                    className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-white hover:text-[#ff7a00] transition-colors"
                  >
                    thelimart@outlook.com
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <p className="text-[#c1c1c1] mt-4">
                    or through the contact form available on this website.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </Container>

        {/* Back Button */}
        <div className="w-full px-10 lg:px-24 pt-12 md:pt-16 flex justify-start">
          <Link to="/">
            <Button variant="back" size="normal">
              Back
            </Button>
          </Link>
        </div>
      </div>

      <FeedbacksFooterSection hideFeedbacks={true} />
    </main>
  );
}
