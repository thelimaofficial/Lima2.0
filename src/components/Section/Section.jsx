import React from "react";

export default function Section({ children, className = "" }) {
  return (
    <section className={`relative w-full py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
