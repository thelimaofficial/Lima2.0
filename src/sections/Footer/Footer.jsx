import React from 'react';
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

// Icons
import xIcon from "../../assets/images/icons/x.webp";
import instagramIcon from "../../assets/images/icons/instagram.webp";
import linkedinIcon from "../../assets/images/icons/linkedin.webp";
import githubIcon from "../../assets/images/icons/github.webp";
import behanceIcon from "../../assets/images/icons/behance.webp";
import emailIcon from "../../assets/images/icons/email.webp";
import wppIcon from "../../assets/images/icons/wpp.webp";

// Logo
import logo from "../../assets/images/logo1.svg";

export default function Footer() {
  return (
    <footer className="bg-[#090909] relative z-10 w-full min-h-screen flex flex-col py-10 md:py-16 overflow-hidden">
      
      {/* BACKGROUND ANIMADO */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="glow-layer glow-1 opacity-60"></div>
        <div className="glow-layer glow-2 opacity-60"></div>
        <div className="glow-layer glow-3 opacity-60"></div>
      </div>

      <Container className="relative z-10 flex flex-col flex-grow justify-between">
        
        {/* Top Row: Socials & Contact */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-0">
          
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/thelimaofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={xIcon} className="w-10 h-10 object-contain" alt="X" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={instagramIcon} className="w-10 h-10 object-contain" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} className="w-10 h-10 object-contain" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={githubIcon} className="w-10 h-10 object-contain" alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={behanceIcon} className="w-10 h-10 object-contain" alt="Behance" />
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
            <a href="mailto:thelimart@outlook.com" className="flex items-center gap-3 text-[#c1c1c1] hover:text-white transition-colors text-lg">
              <img src={emailIcon} className="w-10 h-10 object-contain" alt="Email" />
              <span>thelimart@outlook.com</span>
            </a>
            <a href="https://wa.me/5511963815913" className="flex items-center gap-3 text-[#c1c1c1] hover:text-white transition-colors text-lg">
              <img src={wppIcon} className="w-10 h-10 object-contain" alt="WhatsApp" />
              <span>+55 (11) 96381-5913</span>
            </a>
          </div>
        </div>

        {/* Bottom Area: Logo & CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mt-auto gap-12 lg:gap-0 pt-16">
          
          {/* CTA Section (Mobile: Top, Desktop: Right) */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto order-1 lg:order-2 text-center lg:text-right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Let's build something<br/>
              that actually <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">converts.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-4 sm:gap-6 mb-0 lg:mb-24 w-full sm:w-auto">
              <Button variant="primary" size="normal" href="#projects">
                View Projects
              </Button>
              <Button variant="secondary" size="normal" href="https://x.com/thelimaofficial" target="_blank" rel="noopener noreferrer">
                Get in touch &nbsp;&nbsp;
              </Button>
            </div>
            
            {/* Desktop Privacy Policy */}
            <div className="hidden lg:block text-[#e8e8e8] text-sm font-medium text-right">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> &nbsp;&bull;&nbsp; Developed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:opacity-80 transition-opacity">Alwer</a>
            </div>
          </div>

          {/* Logo & Copyright Section (Mobile: Bottom, Desktop: Left) */}
          <div className="flex flex-col items-center lg:items-start h-full w-full lg:w-auto order-2 lg:order-1 mt-16 lg:mt-0">
            <img src={logo} alt="Lima Logo" className="h-24 sm:h-32 lg:h-40 object-contain mb-8 lg:mb-16 origin-center lg:origin-left" />
            <div className="text-[#888888] text-sm font-medium text-center lg:text-left mb-4 lg:mb-0">
              &copy; 2026 Lima. All rights reserved.
            </div>
            {/* Mobile Privacy Policy */}
            <div className="block lg:hidden text-[#e8e8e8] text-sm font-medium text-center mt-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> &nbsp;&bull;&nbsp; Developed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:opacity-80 transition-opacity">Alwer</a>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
