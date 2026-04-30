import React from "react";

export default function Section({ children, className = "" }) {
  return (
    <section className={`relative w-full ${className}`}>
      {children}
    </section>
  );
}
