import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
