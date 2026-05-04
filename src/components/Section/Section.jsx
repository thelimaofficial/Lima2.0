import React from "react";

export default function Section({ children, className = "", ...props }) {
  return (
    <section className={`relative w-full ${className}`} {...props}>
      {children}
    </section>
  );
}
